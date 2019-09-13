package com.maju.backend.business.dao.impl;

import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.maju.backend.business.interfaces.ValoresMedidos;
import com.maju.backend.database.connection.ConexaoJDBC;
import com.maju.backend.database.connection.ConexaoProperties;

public class TemperaturaDAOImpl {

	private final ConexaoJDBC conexao;
	
	  public TemperaturaDAOImpl() throws SQLException, ClassNotFoundException {
	        this.conexao = new ConexaoProperties();
	    }
	
	    public Long inserir(ValoresMedidos valoresMedidos) throws SQLException, ClassNotFoundException {
	        Long id = null;
	        
	        StringBuffer sql = new StringBuffer();
	        sql.append("\n INSERT INTO DB_CLIMA ( ");
			sql.append("\n   ").append("UV");
			sql.append("\n  ,").append("CHUVA");
			sql.append("\n  ,").append("TEMPERATURA");
			sql.append("\n  ,").append("UMIDADE");
			sql.append("\n  ,").append("CREATE_S");
			sql.append("\n   ) VALUES ( ?, ?, ?, ?, DATEADD(HOUR, -3, GETDATE())) ");
			
	        try {
	            PreparedStatement statement = this.conexao.getConnection().prepareStatement(sql.toString());
	            
	            statement.setString(1, valoresMedidos.getUv() != null ? valoresMedidos.getUv() : null);	            
	            statement.setString(2, valoresMedidos.getChuva() != null ? valoresMedidos.getChuva() : null);	            
	            statement.setString(3, valoresMedidos.getTemperatura() != null ? valoresMedidos.getTemperatura() : null);	            
	            statement.setString(4, valoresMedidos.getUmidade() != null ? valoresMedidos.getUmidade() : null);
	            statement.executeUpdate();
	            this.conexao.commit();
	            
	        } catch (SQLException e) {
	        	System.err.println("Não foi possível salvar.");
	        	e.printStackTrace();
	            this.conexao.rollback();
	        }
	        return id;
	    }
	    
}
