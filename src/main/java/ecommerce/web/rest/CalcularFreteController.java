package ecommerce.web.rest;

import java.util.Random;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ecommerce.service.CalcularFreteService;

/**
 * @author Pedro Ribeiro
 *
 */

@RestController
@RequestMapping("/frete")
public class CalcularFreteController {
   
   @GetMapping("/{qtdItem}")
   public int valorFrete(@PathVariable int qtdItem) {
      
      CalcularFreteService cf = new CalcularFreteService();
      
      return cf.valorFrete(qtdItem);
   }  

}
