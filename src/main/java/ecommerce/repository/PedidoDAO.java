package ecommerce.repository;

import org.springframework.data.repository.CrudRepository;

import ecommerce.model.Pedido;

/**
 * @author Pedro Ribeiro
 *
 */
public interface PedidoDAO extends CrudRepository<Pedido, Long> {

}
