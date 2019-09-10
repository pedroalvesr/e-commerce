package maximaecommerce.repository;

import maximaecommerce.model.Pedido;

import org.springframework.data.repository.CrudRepository;

/**
 * @author Pedro Ribeiro
 *
 */
public interface PedidoDAO extends CrudRepository<Pedido, Long> {

}
