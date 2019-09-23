package maju.com.test;

import java.sql.Connection;
import java.sql.DriverManager;

public class TestConnection {
	
	private String url;
	private String usuario;
	private String senha;
	private Connection con;
	
	
	public TestConnection() throws ClassNotFoundException{
		
		Class.forName("net.sourceforge.jtds.jdbc.Driver");
		
//      Class.forName("org.postgresql.Driver");
//      properties.put("user", "postgres");
//      properties.put("password", "sa");
//      String url = "jdbc:postgresql://35.247.241.43:5432/CONSUMIA_DB";

		url = "jdbc:jtds:sqlserver://majudb.database.windows.net/MAJU_DB";
		
		usuario = "maju";
		senha = "Usjt2019";
		
		
		try {
			
			Class.forName("org.postgresql.Driver");
			this.con = DriverManager.getConnection(url, usuario, senha);
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
