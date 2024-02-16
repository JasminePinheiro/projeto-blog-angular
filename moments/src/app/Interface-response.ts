/* O nosso dado será generico por isso colocamos uma chave nesse caso foi o 'T' */
/* Estamos padronizando a resposta */
export interface Response<T> {
   message?: string,
   data: T,
}