package com.maju.backend.business.dao.impl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.maju.backend.business.interfaces.ValoresMedidos;
import com.maju.backend.database.connection.ConexaoJDBC;
import com.maju.backend.database.connection.ConexaoProperties;
/**
*
* @author Felipe Mota Modesto
*/
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
			sql.append("\n  ,").append("LOCALIZACAO");
			sql.append("\n  ,").append("CREATE_S");
			sql.append("\n   ) VALUES ( ?, ?, ?, ?, ?, DATEADD(HOUR, -3, GETDATE())) ");
			
	        try {
	            PreparedStatement statement = this.conexao.getConnection().prepareStatement(sql.toString());
	            
	            statement.setString(1, valoresMedidos.getUv() != null ? valoresMedidos.getUv() : null);	            
	            statement.setString(2, valoresMedidos.getChuva() != null ? valoresMedidos.getChuva() : null);	            
	            statement.setString(3, valoresMedidos.getTemperatura() != null ? valoresMedidos.getTemperatura() : null);	            
	            statement.setString(4, valoresMedidos.getUmidade() != null ? valoresMedidos.getUmidade() : null);
	            statement.setString(5, valoresMedidos.getLocalizacao() != null ? valoresMedidos.getLocalizacao() : null);
	            statement.executeUpdate();
	            this.conexao.commit();
	            
	        } catch (SQLException e) {
	        	System.err.println("Não foi possível salvar.");
	        	e.printStackTrace();
	            this.conexao.rollback();
	        }
	        return id;
	    }
	    
	    public ValoresMedidos findAll() throws SQLException, ClassNotFoundException {
	    	
	    	ValoresMedidos valoresMedidos = new ValoresMedidos();
	    	
	    	StringBuffer sql = new StringBuffer();
	    	sql.append("SELECT TOP 1 * FROM DB_CLIMA ORDER BY CREATE_S DESC");

	        try {
	        	
	        	PreparedStatement statement = this.conexao.getConnection().prepareStatement(sql.toString());
	            ResultSet rs = statement.executeQuery();
	            
	            while (rs.next()) {
	            	parser(rs, valoresMedidos);
	            }

	        } catch (SQLException e) {
	            throw e;
	        }

	        return valoresMedidos;
	    }
	    
    public List<ValoresMedidos> findAllDay() throws SQLException, ClassNotFoundException {
	    	
    		List<ValoresMedidos> valoresMedidosList = new ArrayList();
    		ValoresMedidos valoresMedidos = new ValoresMedidos();
	    	
	    	StringBuffer sql = new StringBuffer();
	    	sql.append("SELECT * FROM DB_CLIMA WHERE CREATE_S >= '2019-10-20' ORDER BY CREATE_S DESC");

	        try {
	        	
	        	PreparedStatement statement = this.conexao.getConnection().prepareStatement(sql.toString());
	            ResultSet rs = statement.executeQuery();
	            
	            while (rs.next()) {
	            	
	            	while (rs.next()) {
	            		valoresMedidosList.add(parser(rs, valoresMedidos));
	                }
	            	
	            }

	        } catch (SQLException e) {
	            throw e;
	        }

	        return valoresMedidosList;
	    }
	    
	    
	    private ValoresMedidos parser(ResultSet resultSet, ValoresMedidos valoresMedidos) throws SQLException {
	    	
	    	valoresMedidos.setId(resultSet.getInt("ID"));
	    	valoresMedidos.setUv(resultSet.getString("UV"));
	    	valoresMedidos.setChuva(resultSet.getString("CHUVA"));
	    	valoresMedidos.setTemperatura(resultSet.getString("TEMPERATURA"));	
	    	valoresMedidos.setUmidade(resultSet.getString("UMIDADE"));	
	    	valoresMedidos.setLocalizacao(resultSet.getString("LOCALIZACAO"));
	    	valoresMedidos.setCreateS(resultSet.getTimestamp("CREATE_S"));	
	    	valoresMedidos.setUvNumber(resultSet.getString("UV"));

	        return valoresMedidos;
	    }
	    
}
