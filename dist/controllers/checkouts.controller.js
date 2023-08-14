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

// src/controllers/checkouts.controller.ts
var checkouts_controller_exports = {};
__export(checkouts_controller_exports, {
  checkouts: () => checkouts
});
module.exports = __toCommonJS(checkouts_controller_exports);
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();
var checkouts = async (req, res) => {
  const {
    valor_transacao,
    descricao_transacao,
    numero_cartao,
    nome_portador_cartao,
    data_validade_cartao,
    codigo_verificacao_cartao
  } = req.body;
  let ccNumber = numero_cartao.toString();
  let ultimosDigitosCartao = ccNumber.substr(-4);
  const taxaPagamento = valor_transacao * 0.05;
  const valorReceber = valor_transacao * 0.95;
  const dataPagamento = new Date((/* @__PURE__ */ new Date()).setDate((/* @__PURE__ */ new Date()).getDate() + 30));
  try {
    const checkout = await prisma.checkout.create({
      data: {
        valor_transacao,
        descricao_transacao,
        numero_cartao: ultimosDigitosCartao,
        nome_portador_cartao,
        data_validade_cartao,
        codigo_verificacao_cartao: codigo_verificacao_cartao.toString()
      }
    });
    const payable = await prisma.payable.create({
      data: {
        checkoutId: checkout.id,
        status_pagamento: "liquidado",
        // status_pagamento: "pendente",
        data_pagamento: dataPagamento,
        valor_receber: valorReceber,
        taxa_pagamento: taxaPagamento
      }
    });
    res.status(200).json({ checkout, payable, message: "Checkout criado com sucesso" });
    console.log({ checkout, payable });
  } catch (error) {
    console.error("Erro detalhado: ", error);
    res.status(500).json({ error: error.message });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  checkouts
});
