/*
  Warnings:

  - You are about to drop the `checkhouts` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `checkhoutsId` to the `payable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payable" ADD COLUMN     "checkhoutsId" TEXT NOT NULL;

-- DropTable
DROP TABLE "checkhouts";

-- CreateTable
CREATE TABLE "checkouts" (
    "id" TEXT NOT NULL,
    "valor_transacao" DECIMAL(65,30) NOT NULL,
    "descricao_transacao" TEXT NOT NULL,
    "numero_cartao" TEXT NOT NULL,
    "nome_portador_cartao" TEXT NOT NULL,
    "data_validade_cartao" TEXT NOT NULL,
    "codigo_verificacao_cartao" TEXT NOT NULL,

    CONSTRAINT "checkouts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "payable" ADD CONSTRAINT "payable_checkhoutsId_fkey" FOREIGN KEY ("checkhoutsId") REFERENCES "checkouts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
