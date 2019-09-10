package maximaecommerce.web.rest;

import java.util.ArrayList;
import java.util.List;

import maximaecommerce.model.Cliente;
import maximaecommerce.model.Pedido;
import maximaecommerce.repository.ClienteDAO;
import maximaecommerce.repository.PedidoDAO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Pedro Ribeiro
 *
 */

@RestController
@RequestMapping("/pedido")
public class PedidoController {
   
   @Autowired
   private PedidoDAO pedidoDAO;
   
   @Autowired
   private ClienteDAO clienteDAO;
   
   @GetMapping
   public List<Pedido> listar() {

      List<Pedido> p = new ArrayList<>();
      pedidoDAO.findAll().forEach(p::add);
      return p;
   }

   
   @PostMapping
   @ResponseStatus(HttpStatus.CREATED)
   public Pedido inserir(@RequestBody Pedido pedido) {
      
      salvarCliente(pedido.getCliente());
      return pedidoDAO.save(pedido);
   }
   
   public Cliente salvarCliente(Cliente cliente) {
      if (cliente.getCodigo() != null) {
         return clienteDAO.save(cliente);
      }
      return null;
   }


}
