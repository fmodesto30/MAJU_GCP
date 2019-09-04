package com.maju.database.connection;

import java.sql.Connection;
import java.sql.DriverManager;

public class TestConnection {
	
	private String url;
	private String usuario;
	private String senha;
	private Connection con;
	
	
	public TestConnection() throws ClassNotFoundException{
		
		Class.forName("net.sourceforge.jtds.jdbc.Driver");

//		url = "jdbc:postgresql://localhost:5432/postgres";
		url = "jdbc:jtds:sqlserver://majudb.database.windows.net/MAJU_DB";
		
		usuario = "maju";
		senha = "Usjt2019";
		
		
		try {
			
			Class.forName("org.postgresql.Driver");
			con = DriverManager.getConnection(url, usuario, senha);
			System.err.println("conexao pro !!!");
			
			
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
				
		
		
		
	}
	
	public static void main(String[] args) throws ClassNotFoundException {
		
		TestConnection testando = new TestConnection();
	
	}

}
