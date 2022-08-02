var PROTO_PATH = process.cwd() + '/proto/route_guide.proto';


import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
let routeguide = grpc.loadPackageDefinition(packageDefinition).routeguide;
let client = new routeguide.RouteGuide('localhost:', grpc.credentials.createInsecure());

let locdate = {latitude: 35.09972, longitude: -94.578331, year:2020,month:10,day:20};
let dt = {year:2019,month:10,day:20}

function runGetHistoricalData(){
    client.GetHistoricalData(locdate,function(err,response){
        console.log(response);
    });
}
function runGetUnixTime(){
    
    client.GetUnixTime(dt,function(err,response){
        console.log(response);
    });
}
function main() {
    
    runGetHistoricalData();
    runGetUnixTime();
  
  }
  
 main()