import fetch from "node-fetch";
var PROTO_PATH = process.cwd()+ '/proto/route_guide.proto';
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
var routeguide = grpc.loadPackageDefinition(packageDefinition).routeguide;

function ConvertToUnix(value){
    let dt = new Date(value.year,value.month-1,value.day)
    return Math.floor(dt.getTime() / 1000)
  
}
function GetUnixTime(call, callback) {
    let val = ConvertToUnix(call.request)
    console.log(val)
    callback(null, {unixtime:val});
}

async function getData(locdate){
    
    let latitude = locdate.latitude
    let longitude = locdate.longitude
    let date= {year:locdate.year,month:locdate.month,day:locdate.day}
    
    
    const response = await fetch(`http://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${ConvertToUnix(date)}&appid=`);
    let data = await response.text();
    console.log(data)
    
    return data
}
   

function GetHistoricalData(call,callback) {
  console.log(call.request)
    getData(call.request).then(val => callback(null,{data:val}))
    
    
  }

  
function getServer() {
    var server = new grpc.Server();
    server.addService(routeguide.RouteGuide.service, {
      GetHistoricalData: GetHistoricalData,
      GetUnixTime:GetUnixTime
    });
    return server;
  }
  var routeServer = getServer();
  routeServer.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    console.log("Listening for requests")
    routeServer.start();
  });