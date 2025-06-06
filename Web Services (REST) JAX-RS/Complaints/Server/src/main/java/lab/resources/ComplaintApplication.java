package lab.resources;

import jakarta.ws.rs.ApplicationPath;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.core.Application;

@ApplicationPath("/api")
public class ComplaintApplication extends Application {
    @GET
    public String hi(){
        return "Hello, API!";
    }
}