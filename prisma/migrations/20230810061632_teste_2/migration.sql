/*
  Warnings:

  - The primary key for the `Checkout` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Payable` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Payable" DROP CONSTRAINT "Payable_checkoutId_fkey";

-- AlterTable
ALTER TABLE "Checkout" DROP CONSTRAINT "Checkout_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Checkout_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Checkout_id_seq";

-- AlterTable
ALTER TABLE "Payable" DROP CONSTRAINT "Payable_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "checkoutId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Payable_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Payable_id_seq";

-- AddForeignKey
ALTER TABLE "Payable" ADD CONSTRAINT "Payable_checkoutId_fkey" FOREIGN KEY ("checkoutId") REFERENCES "Checkout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
