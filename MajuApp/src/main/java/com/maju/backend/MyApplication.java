package com.maju.backend;

import javax.ws.rs.ApplicationPath;
import org.glassfish.jersey.server.ResourceConfig;

@ApplicationPath("restFull")
public class MyApplication extends ResourceConfig {
	
	 public MyApplication() {
	        packages("com.maju.backend.controllers");
	    }
}
