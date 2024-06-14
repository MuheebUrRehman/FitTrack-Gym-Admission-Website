<%@page import="java.sql.*" contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Form Submission</title>
    </head>
    <body>
        <h1>Received Results</h1>
        <%
            String fn,ln,em,db;
            fn=request.getParameter("name");
            ln=request.getParameter("email");
            em=request.getParameter("subject");
            db=request.getParameter("message");
            
            try{
                Class.forName("com.mysql.jdbc.Driver");
                Connection conn = 
                        DriverManager.getConnection("jdbc:mysql://localhost:3306/fittrack","root","");
                PreparedStatement ps =
                        conn.prepareStatement("insert into contactdata(name,email,subject,message) values(?,?,?,?);");
                ps.setString(1, fn);
                ps.setString(2, ln);
                ps.setString(3, em);
                ps.setString(4, db);
 
                int x = ps.executeUpdate();
                
                if(x > 0){
                    out.println("Data Stored..");
                    response.sendRedirect("index.html");
                }else{
                    out.println("Unable To Store Data..");
                }
                
            }catch(Exception e){
                out.println(e);
            }

         %>
    </body>
</html>
