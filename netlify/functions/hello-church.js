import { connectToDatabase } from "/lib/connect-to-db";
import { Product } from "/models/church";

exports.handler=async function(event,context) {
  console.log("in the netlify function")
  try {
    console.log("before database connection call");
    await connectToDatabase();
    console.log("after database connection call");
 
    const limit = event.queryStringParameters.limit
    const skip = event.queryStringParameters.skip    
    console.log("skip=" + skip);
    console.log("limit=" + limit);

    const products = await Product.find().skip(skip).limit(limit).exec();

    console.log("products.length=" + products.length);

    return {
      statusCode: 200,
      body:JSON.stringify(products),
    };
  } catch (error) {
    console.log("error=" + error);
    return {
      statusCode: 200,
      body:JSON.stringify({error:"Unable to get the mongodb data"}),
    };
  }

 
};



// exports.handler=async function(event,context) {
//     console.log("in the netlify function")
//     const data = { message:"Hello Church" };

//     return {
//       statusCode: 200,
//       body:JSON.stringify(data),
//     };
// };