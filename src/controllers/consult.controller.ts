import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient()

export const consult = async (req: Request, res: Response) => {

 const payable = await prisma.payable.findMany({
  where: {
   status_pagamento: 'pendente'
  }
 })
 res.json(payable)
}
