import { Cliente } from './cliente';

export class Pedido {
    public valorTotal: number;
    public qtdeItens: number;
    public valorFrete: number
    public cliente: Cliente;

    constructor() { }
}
