package maximatech.io.maximaecommerce;

import maximaecommerce.service.CalcularFreteService;

import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class MaximaecommerceApplicationTests {

	@Test
	public void contextLoads() {
	   
	   CalcularFreteService c = new CalcularFreteService();
	   System.out.println(c.valorFrete(4));
	   
	}
	

}
