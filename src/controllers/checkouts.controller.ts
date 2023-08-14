import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { checkoutData } from './../types/index';

const prisma = new PrismaClient();

export const checkouts = async (req: Request, res: Response) => {
 const {
  valor_transacao,
  descricao_transacao,
  numero_cartao,
  nome_portador_cartao,
  data_validade_cartao,
  codigo_verificacao_cartao
 } = req.body as checkoutData;

 let ccNumber = numero_cartao.toString();
 let ultimosDigitosCartao = ccNumber.substr(-4)

 const taxaPagamento = valor_transacao * 0.05;
 const valorReceber = valor_transacao * 0.95;

 const dataPagamento = new Date(new Date().setDate(new Date().getDate() + 30))

 try {
  const checkout = await prisma.checkout.create({
   data: {
    valor_transacao,
    descricao_transacao,
    numero_cartao: ultimosDigitosCartao,
    nome_portador_cartao,
    data_validade_cartao,
    codigo_verificacao_cartao: codigo_verificacao_cartao.toString(),
   }
  })

  const payable = await prisma.payable.create({
   data: {
    checkoutId: checkout.id,
    // status_pagamento: "liquidado",
    status_pagamento: "pendente",
    data_pagamento: dataPagamento,
    valor_receber: valorReceber,
    taxa_pagamento: taxaPagamento,
   }
  });

  res.status(200).json({ checkout, payable, message: "Checkout criado com sucesso" })
  console.log({ checkout, payable })

 } catch (error: any) {
  console.error("Erro detalhado: ", error);
  res.status(500).json({ error: error.message })
 }
}