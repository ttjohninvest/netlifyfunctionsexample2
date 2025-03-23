import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  id: {
    type: Number
    //required:true
  },
  ident:{
    type:String
    //required:true
  },
  type: {
    type:String
    //required:true
  },
  name: {
    type:String
    //required:true,
    //unique:true
  },
  latitude_deg: {
    type:Number
    //required:true,
    //unique:true
  },
  longitude_deg: {
    type: Number
    //required:true,
    //unique:true
  },
  elevation_ft: {
    type:Number
    //required:true,
    //unique:true
  },
  continent: {
    type: String
    //required:true
  },
  iso_country: {
    type:String
    //required:true
  },
  iso_region: {
    type: String
    //required:true
  },
  municipality:{
    type:String
    //required:true
  },
  scheduled_service: {
    type:String
    //required:true
  },
  gps_code: {
    type:String
    //required:true,
    //unique:true
  },
  iata_code: {
    type:String
    //required:true,
    //unique:true
  },
  home_link: {
    type: String
    //required:true,
    //unique:true
  },
  wikipedia_link: {
    type:String
    //required:true,
    //unique:true
  },
  wikipedia_link: {
    type: String
    //required:true
  },
  keywords: {
    type:String
    //required:true
  },
  airportpicture: {
    type:String
    //required:true
  }
 
});

export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);