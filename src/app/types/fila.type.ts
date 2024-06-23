export type FilaResponse = {
  message: string;
  data: {
    fila_id: number;
    nome: string;
    nivel: string;
    prioridade: 'normal' | 'preferencial';
  }[];
};
