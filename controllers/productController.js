const Product = require('../models/Product');

exports.newProduct = async (req, res) => {
    console.log(req.body);
    try {
        const product = new Product(req.body);
        product.save();
        res.json(product);
    } catch( error ) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({created: -1});
        res.json({products});
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al obtener los proyectos');
    }
}

exports.updateProduct = async (req, res) => {
    // Extraer información del producto
    const { name, price } = req.body;
    const newProduct = {}
    if(name) {
        newProduct.nombre = nombre;
        newProduct.precio = precio;
    }
    try {
        let product = await Product.findById(req.params.id);

        if(!product) {
            res.status(404).json({ msg: 'Proyecto no encontrado'});
        }

        product = await Product.findByIdAndUpdate({_id: req.params.id} , {$set: newProduct}, {new: true});
        res.json({product});
    } catch (error) {
        res.status(500).send('Error en el servidor');
    }
}

exports.removeProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        if(!product) {
            return res.status(404).json({ msg: 'Producto no encontrado' });
        }

        await Product.findOneAndRemove({_id: req.params.id});
        res.json({msg: 'Proyecto eliminado'});
    } catch( error ) {
        res.status(500).send('Hubo un error');
    }
}