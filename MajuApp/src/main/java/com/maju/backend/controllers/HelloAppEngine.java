package com.maju.backend.controllers;

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

   private TemperaturaDAOImpl temperaturaDAOImpl;
	
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) 
      throws IOException {

    response.setContentType("text/plain");
    response.setCharacterEncoding("UTF-8");
    response.getWriter().print("Maju Application Release Novo 2.0\r\n");

  }

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) {
		
	
		ValoresMedidos valoresMedidos = new ValoresMedidos();
		String values = request.getParameter("values");
		
		try {
			
			this.temperaturaDAOImpl = new TemperaturaDAOImpl();
			
			//Quebra string que contém vírgulas.
			String[] split = values.split(",");
			
			if(split.length >= 1)
				valoresMedidos.setUv(split[0]);
		    if(split.length >= 2)				
				valoresMedidos.setChuva(split[1]);
		    if(split.length >= 3)
				valoresMedidos.setTemperatura(split[2]);
			if(split.length >= 4)
				valoresMedidos.setUmidade(split[3]);
			
			if(split.length < 4)
			   response.getWriter().print("Faltou um dos valores!");
			if(split.length > 4)
			   response.getWriter().print("Tem valores a mais!");
			
			this.temperaturaDAOImpl.inserir(valoresMedidos);
			response.getWriter().print("\nValor salvo no Banco: " + values);
			
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
	
}