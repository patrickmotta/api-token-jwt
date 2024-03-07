const productController = {
   getProduct: (req, res) =>{
      const product = {
         "name": "Apple iphone 14 Pro",
         "value": "15000"
      }

      res.status(200).json(product)
   }
}

export default productController;