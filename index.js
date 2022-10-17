const nodeHtmlToImage = require("node-html-to-image");
const fs = require('fs');
const html = fs.readFileSync('template_order_summary.html').toString();

nodeHtmlToImage({
  output: "./image.png",
  html: html,
	content: {
		name: 'denis',
		productsSubscription: [
			{
				image: 'https://saleor-s3-desa.cuida.pe/products/309030-1_788_aca855ac.png',
				name: 'Panadol',
				detail: 'Paquete x 10 und.',
				quantity: 8,
				price: '9999.00'
			},
			{
				image: 'https://saleor-s3-desa.cuida.pe/products/309030-1_788_aca855ac.png',
				name: 'Toallas higiénicas Invisible clásica',
				detail: 'Paquete x 10 und.',
				quantity: 8,
				price: '99999.00'
			}
		],
		productsSinglePurchase: [
			{
				image: 'https://saleor-s3-desa.cuida.pe/products/309030-1_788_aca855ac.png',
				name: 'Toallas higiénicas Invisible clásica',
				detail: 'Paquete x 10 und.',
				quantity: 8,
				price: '99999.00'
			},
			{
				image: 'https://saleor-s3-desa.cuida.pe/products/309030-1_788_aca855ac.png',
				name: 'Toallas higiénicas Invisible clásica',
				detail: 'Paquete x 10 und.',
				quantity: 8,
				price: '99999.00'
			}
		],
		subtotal: '58.90',
		isFreeDelivery: false,
		delivery: '5.00',
		discount: '5.00',
		total: '63.90',
	}
}).then(() => console.log("The image was created successfully!"));
