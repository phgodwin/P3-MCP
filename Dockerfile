FROM techiescamp/jre-17:1.0.0
WORKDIR /app
 
# Copy the JAR file (/app)
COPY /target/Spring-Legacy-0.0.1-SNAPSHOT.jar app.jar
 
# Expose the port the app runs on
EXPOSE 8082
 
# Run the jar file
CMD ["java", "-jar", "app.jar"] 