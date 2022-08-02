let PROTO_PATH = process.cwd() + './OpenWeatherMap-gRPC-API/proto';

let packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
let routeguide = grpc.loadPackageDefinition(packageDefinition).routeguide;
let client = new routeguide.RouteGuide('localhost:50051', grpc.credentials.createInsecure());

