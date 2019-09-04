package com.maju;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.maju.business.dao.impl.TemperaturaDAOImpl;
import com.maju.business.interfaces.ValoresMedidos;

@SuppressWarnings("serial")
@WebServlet(
    name = "HelloAppEngine",
    urlPatterns = {"/hello"}
)
public class HelloAppEngine extends HttpServlet {

   private com.maju.business.dao.impl.TemperaturaDAOImpl temperaturaDAOImpl;
	
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) 
      throws IOException {

    response.setContentType("text/plain");
    response.setCharacterEncoding("UTF-8");

    response.getWriter().print("Maju Application Release Novo\r\n");

  }

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
		
		ValoresMedidos valoresMedidos = new ValoresMedidos();
		String values = request.getParameter("values");
		
		try {
			temperaturaDAOImpl = new TemperaturaDAOImpl();
			String[] split = values.split(",");
			
				valoresMedidos.setUv(split[0]);
				valoresMedidos.setChuva(split[1]);
				valoresMedidos.setTemperatura(split[2]);
			
			temperaturaDAOImpl.inserir(valoresMedidos);
			response.getWriter().print("Valor salvo no Banco: " + values);
			
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
	
}