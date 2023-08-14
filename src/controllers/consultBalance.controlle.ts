import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient()

export const consultBalance = async (req: Request, res: Response) => {
  try {
    const payables = await prisma.payable.findMany();

    const saldoDisponivel = payables
      .filter(payment => payment.status_pagamento === "liquidado")
      .reduce((total, payment) => total + payment.valor_receber, 0);

    const saldoPrevisto = payables
      .filter(payment => payment.status_pagamento === "pendente")
      .reduce((total, payment) => total + payment.valor_receber, 0);

    res.status(200).json({ "Saldo disponível": saldoDisponivel, "Saldo previsto": saldoPrevisto });
  } catch (error) {
    res.status(400).json({ error: "Erro ao calcular o saldo" });
  }
}