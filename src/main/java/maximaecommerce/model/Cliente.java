package maximaecommerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @author Pedro Ribeiro
 *
 */

@Entity
public class Cliente {
   
   @Id
   @GeneratedValue(strategy=GenerationType.IDENTITY)
   private Long id;
   
   @Column(nullable=false)
   private String codigo;
   
   @Column(nullable=false)
   private String nome;

   public Long getId() {
      return id;
   }

   public void setId(Long id) {
      this.id = id;
   }

   public String getCodigo() {
      return codigo;
   }

   public void setCodigo(String codigo) {
      this.codigo = codigo;
   }

   public String getNome() {
      return nome;
   }

   public void setNome(String nome) {
      this.nome = nome;
   }

}
