package ecommerce.io.ecommerce;

import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;

import ecommerce.service.CalcularFreteService;

@SpringBootTest
public class MaximaecommerceApplicationTests {

	@Test
	public void contextLoads() {
	   
	   CalcularFreteService c = new CalcularFreteService();
	   System.out.println(c.valorFrete(4));
	   
	}
	

}
