package com.maju.business.dao.impl;

import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.maju.business.interfaces.ValoresMedidos;
import com.maju.database.connection.ConexaoJDBC;
import com.maju.database.connection.ConexaoPostgresJDBC;

public class TemperaturaDAOImpl {

	private final ConexaoJDBC conexao;
	
	  public TemperaturaDAOImpl() throws SQLException, ClassNotFoundException {
	        this.conexao = new ConexaoPostgresJDBC();
	    }
	
	    public Long inserir(ValoresMedidos valoresMedidos) throws SQLException, ClassNotFoundException {
	        Long id = null;
	        
	        StringBuffer sql = new StringBuffer();
	        sql.append("\n INSERT INTO DB_CLIMA ( ");
			sql.append("\n   ").append("UV");
			sql.append("\n  ,").append("CHUVA");
			sql.append("\n  ,").append("TEMPERATURA");
			sql.append("\n  ,").append("CREATE_S");
			sql.append("\n   ) VALUES (?, ?, ?, DATEADD(HOUR, -3, GETDATE())) ");
			
	        try {
	            PreparedStatement statement = this.conexao.getConnection().prepareStatement(sql.toString());
	            
	            if(valoresMedidos.getUv() != null)
	            	statement.setString(1, valoresMedidos.getUv());
	            
	            if(valoresMedidos.getChuva() != null)
	            	statement.setString(2, valoresMedidos.getChuva());
	            
	            if(valoresMedidos.getTemperatura() != null)
	            	statement.setString(3, valoresMedidos.getTemperatura());
	            
	            statement.executeUpdate();
	            this.conexao.commit();
	            
	        } catch (SQLException e) {
	        	System.err.println("Não foi possível salvar.");
	        	e.printStackTrace();
	            this.conexao.rollback();
	        }
	        return id;
	    }
	    
//	    public Long inserir(String value) throws SQLException, ClassNotFoundException {
//	        Long id = null;
//	        
//	        StringBuffer sql = new StringBuffer();
//	        sql.append("\n INSERT INTO VALORES ( ");
//			sql.append("\n   ").append("VALUE");
//			sql.append("\n  ,").append("CREATE_S");
//			sql.append("\n   ) VALUES (?, NOW() - INTERVAL 3 HOUR) ");
//			
//	        try {
//	            PreparedStatement statement = this.conexao.getConnection().prepareStatement(sql.toString());
//	            statement.setString(1, value);
//	            statement.executeUpdate();
//	            this.conexao.commit();
//	            
//	        } catch (SQLException e) {
//	        	System.err.println("Não foi possível salvar.");
//	        	e.printStackTrace();
//	            this.conexao.rollback();
//	        }
//	        return id;
//	    }
	
}
