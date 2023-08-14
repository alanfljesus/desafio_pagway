/*
  Warnings:

  - You are about to drop the `checkouts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `payable` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "payable" DROP CONSTRAINT "payable_checkhoutsId_fkey";

-- DropTable
DROP TABLE "checkouts";

-- DropTable
DROP TABLE "payable";

-- CreateTable
CREATE TABLE "Checkout" (
    "id" SERIAL NOT NULL,
    "valor_transacao" DECIMAL(65,30) NOT NULL,
    "descricao_transacao" TEXT NOT NULL,
    "numero_cartao" TEXT NOT NULL,
    "nome_portador_cartao" TEXT NOT NULL,
    "data_validade_cartao" TEXT NOT NULL,
    "codigo_verificacao_cartao" TEXT NOT NULL,

    CONSTRAINT "Checkout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payable" (
    "id" SERIAL NOT NULL,
    "checkoutId" INTEGER NOT NULL,
    "status_pagamento" TEXT NOT NULL,
    "data_pagamento" TIMESTAMP(3) NOT NULL,
    "taxa_pagamento" DECIMAL(65,30) NOT NULL,
    "valor_receber" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Payable_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Payable" ADD CONSTRAINT "Payable_checkoutId_fkey" FOREIGN KEY ("checkoutId") REFERENCES "Checkout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
