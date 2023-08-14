-- CreateTable
CREATE TABLE "checkhouts" (
    "id" TEXT NOT NULL,
    "valor_transacao" DECIMAL(65,30) NOT NULL,
    "descricao_transacao" TEXT NOT NULL,
    "numero_cartao" TEXT NOT NULL,
    "nome_portador_cartao" TEXT NOT NULL,
    "data_validade_cartao" TEXT NOT NULL,
    "codigo_verificacao_cartao" TEXT NOT NULL,

    CONSTRAINT "checkhouts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payable" (
    "id" TEXT NOT NULL,
    "status_pagamento" TEXT NOT NULL,
    "data_pagamento" TIMESTAMP(3) NOT NULL,
    "taxa_pagamento" DECIMAL(65,30) NOT NULL,
    "valor_receber" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "payable_pkey" PRIMARY KEY ("id")
);
