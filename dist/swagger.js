// src/swagger.json
var openapi = "3.0.0";
var info = {
  title: "API Desafio PagWay",
  description: "API para o desafio da PagWay",
  termsOfService: "http://localhost:3333/terms",
  contact: {
    email: "contactemail@gmail.com"
  },
  version: "1.0.0"
};
var servers = [
  {
    url: "http://localhost:3333",
    description: "API de teste"
  }
];
var paths = {
  "/checkouts": {
    post: {
      summary: "Cria um checkout",
      description: "Essa rota deve processar transa\xE7\xF5es",
      tags: [
        "Checkout"
      ],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Checkout"
            },
            examples: {
              checkout: {
                value: {
                  valor_transacao: 150,
                  descricao_transacao: "Smartband XYZ 3.0",
                  numero_cartao: "1234567891234567",
                  nome_portador_cartao: "Jo\xE3o",
                  data_validade_cartao: "2021-12-31",
                  codigo_verificacao_cartao: "123"
                }
              }
            }
          }
        }
      },
      responses: {
        "200": {
          description: "OK",
          content: {
            "application/json": {
              schema: {
                type: "object",
                $ref: "#/components/schemas/Checkout"
              }
            }
          }
        },
        "400": {
          description: "Erro ao criar checkout"
        }
      }
    }
  },
  "/checkout": {
    get: {
      summary: "Consulta transa\xE7\xF5es",
      description: "Essa rota deve consultar transa\xE7\xF5es",
      tags: [
        "Checkout"
      ],
      responses: {
        "200": {
          description: "OK"
        }
      }
    }
  },
  "/consultBalance": {
    get: {
      summary: "Consulta saldo",
      description: "Essa rota deve consultar o saldo",
      tags: [
        "Checkout"
      ],
      responses: {
        "200": {
          description: "OK"
        },
        "400": {
          description: "Erro ao consultar saldo"
        }
      }
    }
  }
};
var components = {
  schemas: {
    Checkout: {
      type: "object",
      properties: {
        valor_transacao: {
          type: "number"
        },
        descricao_transacao: {
          type: "string"
        },
        numero_cartao: {
          type: "string"
        },
        nome_portador_cartao: {
          type: "string"
        },
        data_validade_cartao: {
          type: "string"
        },
        codigo_verificacao_cartao: {
          type: "string"
        }
      }
    }
  }
};
var swagger_default = {
  openapi,
  info,
  servers,
  paths,
  components
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  components,
  info,
  openapi,
  paths,
  servers
});
