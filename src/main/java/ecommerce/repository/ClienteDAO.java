package ecommerce.repository;

import org.springframework.data.repository.CrudRepository;

import ecommerce.model.Cliente;

/**
 * @author Pedro Ribeiro
 *
 */
public interface ClienteDAO extends CrudRepository<Cliente, Long> {

}
