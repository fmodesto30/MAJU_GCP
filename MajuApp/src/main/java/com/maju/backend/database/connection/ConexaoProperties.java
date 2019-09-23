package com.maju.backend.database.connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
*
* @author Felipe Mota Modesto
*/
public class ConexaoProperties implements ConexaoJDBC {
	
	private static final String USER = "maju";
	private static final String PASSWORD = "Usjt2019";
	private static final String URL = "jdbc:jtds:sqlserver://majudb.database.windows.net/MAJU_DB";
	
    private Connection connection = null;

    public ConexaoProperties() throws SQLException, ClassNotFoundException {
  
    	  Class.forName("net.sourceforge.jtds.jdbc.Driver");

     	  Properties properties = new Properties();
          properties.put("user", USER);
          properties.put("password", PASSWORD);
        	
        this.connection = DriverManager.getConnection(URL, properties);
        this.connection.setAutoCommit(false);
    }

    @Override
    public Connection getConnection() {
        return this.connection;
    }

    @Override
    public void close() {
        if (this.connection != null) {
            try {
                this.connection.close();
            } catch (SQLException ex) {
                Logger.getLogger(ConexaoProperties.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    @Override
    public void commit() throws SQLException {
        this.connection.commit();
        this.close();
    }

    @Override
    public void rollback() {
        if (this.connection != null) {
            try {
                this.connection.rollback();
            } catch (SQLException ex) {
                Logger.getLogger(ConexaoProperties.class.getName()).log(Level.SEVERE, null, ex);
            } finally {
                this.close();
            }
        }
    }

}