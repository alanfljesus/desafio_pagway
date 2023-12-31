"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/controllers/consultBalance.controlle.ts
var consultBalance_controlle_exports = {};
__export(consultBalance_controlle_exports, {
  consultBalance: () => consultBalance
});
module.exports = __toCommonJS(consultBalance_controlle_exports);
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();
var consultBalance = async (req, res) => {
  try {
    const payables = await prisma.payable.findMany();
    const saldoDisponivel = payables.filter((payment) => payment.status_pagamento === "liquidado").reduce((total, payment) => total + payment.valor_receber, 0);
    const saldoPrevisto = payables.filter((payment) => payment.status_pagamento === "pendente").reduce((total, payment) => total + payment.valor_receber, 0);
    res.status(200).json({ "Saldo dispon\xEDvel": saldoDisponivel, "Saldo previsto": saldoPrevisto });
  } catch (error) {
    res.status(400).json({ error: "Erro ao calcular o saldo" });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  consultBalance
});
