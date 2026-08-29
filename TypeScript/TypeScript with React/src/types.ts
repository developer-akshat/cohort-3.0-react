// category
// description
// id
// 1
// image
// price
// 109.95
// rating
// title

export interface Product {
 id:number,
 title:string,
 category:string,
 image:string,
 price:number,
 description:string,
 rating:{
    rate:number,
    count:number,
 }
}