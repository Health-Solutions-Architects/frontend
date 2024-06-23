export type Triagem = {
  nome: string;
  cpf: string;
  peso: string | number;
  altura: string | number;
  data_nascimento: string;
  sintomas: string;
};

export type TriagemResponse = {
  message: string;
  data: {
    classificacao: string;
    cor: string;
    descricao: string;
  };
};

export type PreTriagemResponse = {
  message: string;
  data: {
    cpf: string;
    nome: string;
    data_nascimento: string;
    peso: number;
    altura: number;
    sintomas: string;
    response_gpt: {
      classificacao: string;
      cor: string;
      nivel: 4;
      descricao: string;
    };
  };
};
