

import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
let PROTO_PATH = process.cwd() + '/src/OpenWeatherMap-gRPC-API/proto/service.proto';
let packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
let routeguide = grpc.loadPackageDefinition(packageDefinition).weather;

let client = new routeguide.WeatherService('localhost:50051', grpc.credentials.createInsecure());

function getLocation(location){
    let loc = {city:location}
    
    client.Location(loc,function(err,response){
        console.log(err,response);
        return response
        
    });
    
}
// getLocation("Orlando")

export {getLocation};