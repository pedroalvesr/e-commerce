package maximaecommerce.service;

import java.util.Random;

import org.springframework.stereotype.Service;

/**
 * @author Pedro Ribeiro
 *
 */

@Service
public class CalcularFreteService {
   
   static int vlrMin = 5;
   static int vlrMax = 10;
   
   public int valorFrete(int qtdItem) {
      
      Random random = new Random();
      
      int r = random.nextInt((vlrMax - vlrMin) + 1 ) + vlrMin;
      
      return Math.multiplyExact(r, qtdItem);
   }

}
