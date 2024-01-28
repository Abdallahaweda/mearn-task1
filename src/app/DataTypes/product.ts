export class product{
  ID:string
  Name:string
  Price:number
  Img:string
  rate:number;
  constructor(id:string,name:string,price:number,img:string,rate:number){
    this.ID = id;
    this.Name=name
    this.Price=price
    this.Img=img
    this.rate=rate
  }
}
