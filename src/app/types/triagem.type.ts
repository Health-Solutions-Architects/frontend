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
