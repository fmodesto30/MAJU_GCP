package com.maju.backend.controllers;

import java.sql.SQLException;
import java.text.SimpleDateFormat;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.maju.backend.business.dao.impl.TemperaturaDAOImpl;
import com.maju.backend.business.interfaces.ValoresMedidos;


/**
 *
 * @author Felipe Mota Modesto
 */

@Path("park")
public class HelloController {
	
	private TemperaturaDAOImpl temperaturaDAOImpl;
	
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getMensagem(@QueryParam("usuario") String usuario){
        return "Bem vindo: " + usuario;
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("usuarios/{id}")
    public String getUsuario(@PathParam("id") long id){
        return "Recuperando usuario com ID: " + id;
    }
    
    @GET
    @Path("getAll")
    @Produces(MediaType.APPLICATION_JSON)
    public Response findAll() throws ClassNotFoundException, SQLException{
    	
    	this.temperaturaDAOImpl = new TemperaturaDAOImpl();
    	ValoresMedidos valoresMedidos = this.temperaturaDAOImpl.findAll();
    	valoresMedidos.setUmidade(valoresMedidos.getUmidade().substring(0, 2));
    	valoresMedidos.setTemperatura(valoresMedidos.getTemperatura().substring(0, 2));
    	valoresMedidos.setChuva(valoresMedidos.getChuva().equals("Nao_Chove") ? "Não" : "Sim");
    	
    	
    	String data = new SimpleDateFormat("dd/MM/yyyy").format(valoresMedidos.getCreateS());
    	String hora = new SimpleDateFormat("HH:mm").format(valoresMedidos.getCreateS());
    	valoresMedidos.setData(data);
    	valoresMedidos.setHora(hora);
    	
    	if(Integer.valueOf(valoresMedidos.getUv()) >= 0 && Integer.valueOf(valoresMedidos.getUv()) <= 2)
    		valoresMedidos.setUv("Baixo");
    	else if(Integer.valueOf(valoresMedidos.getUv()) >= 3 && Integer.valueOf(valoresMedidos.getUv()) <= 5)
    		valoresMedidos.setUv("Moderado");
    	else if(Integer.valueOf(valoresMedidos.getUv()) >= 6 && Integer.valueOf(valoresMedidos.getUv()) <= 7)
    		valoresMedidos.setUv("Alto");
    	else if(Integer.valueOf(valoresMedidos.getUv()) >= 8 && Integer.valueOf(valoresMedidos.getUv()) <= 10)
    		valoresMedidos.setUv("Muito Alto");
    	else if(Integer.valueOf(valoresMedidos.getUv()) >= 11)
    		valoresMedidos.setUv("Extremo");
    	
    	System.err.println(valoresMedidos.toString());
    	 return Response.ok(valoresMedidos, MediaType.APPLICATION_JSON).build();
    }
}
