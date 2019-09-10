package maximaecommerce.repository;

import maximaecommerce.model.Cliente;

import org.springframework.data.repository.CrudRepository;

/**
 * @author Pedro Ribeiro
 *
 */
public interface ClienteDAO extends CrudRepository<Cliente, Long> {

}
