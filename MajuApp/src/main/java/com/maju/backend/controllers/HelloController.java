package com.maju.backend.controllers;

import java.sql.SQLException;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

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
    public String findAll() throws ClassNotFoundException, SQLException{
    	
    	this.temperaturaDAOImpl = new TemperaturaDAOImpl();
    	ValoresMedidos valoresMedidos = this.temperaturaDAOImpl.findAll();    
    	System.err.println(valoresMedidos.toString());
    	
        return valoresMedidos.toString() ;
    }
}
