package com.maju.backend.database.connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;


public class ConexaoProperties implements ConexaoJDBC {

    private Connection connection = null;

    public ConexaoProperties() throws SQLException, ClassNotFoundException {
//        Class.forName("org.postgresql.Driver");
    	  Class.forName("net.sourceforge.jtds.jdbc.Driver");

          Properties properties = new Properties();
          
//        properties.put("user", "postgres");
//        properties.put("password", "sa");
//        String url = "jdbc:postgresql://35.247.241.43:5432/CONSUMIA_DB";
        
          properties.put("user", "maju");
          properties.put("password", "Usjt2019");
          String url = "jdbc:jtds:sqlserver://majudb.database.windows.net/MAJU_DB";

        this.connection = DriverManager.getConnection(url, properties);
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