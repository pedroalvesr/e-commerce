package maximaecommerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 * @author Pedro Ribeiro
 *
 */

@Entity
public class Pedido {
   
   @Id
   @GeneratedValue(strategy=GenerationType.IDENTITY)
   private Long id;
   
   @Column(nullable=false)
   private Double valorTotal;
   
   @Column(nullable=false)
   private Double qtdeItens;
   
   @Column(nullable=false)
   private Double valorFrete;
   
   @ManyToOne
   @JoinColumn(nullable = false)
   private Cliente cliente;

   public Long getId() {
      return id;
   }

   public void setId(Long id) {
      this.id = id;
   }

   public Double getValorTotal() {
      return valorTotal;
   }

   public void setValorTotal(Double valorTotal) {
      this.valorTotal = valorTotal;
   }

   public Double getQtdeItens() {
      return qtdeItens;
   }

   public void setQtdeItens(Double qtdeItens) {
      this.qtdeItens = qtdeItens;
   }

   public Double getValorFrete() {
      return valorFrete;
   }

   public void setValorFrete(Double valorFrete) {
      this.valorFrete = valorFrete;
   }

   public Cliente getCliente() {
      return cliente;
   }

   public void setCliente(Cliente cliente) {
      this.cliente = cliente;
   }
}
