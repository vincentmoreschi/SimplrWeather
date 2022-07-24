# SimplrWeather

This application uses the [gRPC framework](https://www.grpc.io/docs/what-is-grpc/introduction/) as the communication pipeline. 

You can chose to use any language to create a request or a client application. When the app is running it creates a gRPC server that accepts requests. 

### Making a Request

The gRPC server currently serves two types or requests. One, **GetUnixTime**, receives a datetime struct in the format of `{year,month,day}` and returns that date in unix time. The second request **GetHistoricalData** receives a location and date in the form of  `{latititude,longitude,year,month,day}` and returns the weather from that location in that point in time. **The only restriction is that the year can only go back to the beginning of time, the year 1972**.

Follow the gRPC framework link above for a more specific guide on how to request data using a specfic language. Below I will show examples for requesting data in pseduo code/JS. 

First you must import or load gRPC,the gRPC protoloader and provide the path the `.proto` file in your client file.

```
var PROTO_PATH = '/proto/route_guide.proto';
import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
```
Then create a connection with the server.
```
let routeguide = grpc.loadPackageDefinition(packageDefinition).routeguide;
let client = new routeguide.RouteGuide('localhost:50051', grpc.credentials.createInsecure());

```
At this point we can start making requests to the server. To do that we only need to do something like the following. 
```
    client.GetHistoricalData(locdate,function(err,response){console.log(response);})
```
For example we are calling the **GetHistoricalData** function, the first parameter is the location and date formatted as shown above. The second is a function that will process the response. 

### Receiving a Response

The response received for **GetUnixTime** returns a integer and **GetHistoricalData** returns a JSON response.  
```
Unix Time:
1603166400

Historical Weather:
{"lat":39,"lon":-94,"timezone":"America/Chicago","timezone_offset":-18000,"data":[{"dt":1603166400,"sunrise":1603110596,"sunset":1603150287,"temp":279.64,"feels_like":277.3,"pressure":1023,"humidity":71,"dew_point":274.77,"clouds":100,"wind_speed":3.22,"wind_deg":82,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}]}]}
```

### UML Diagram
<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/7d1f5230-7a3b-49a5-9a94-a5319f5429c5" id="MsCBYnPGcyKr"></iframe></div>