import BigCamel from './img/big-camel.jpg'
import MediumCamel from './img/medium-camel.jpg'
import SmallCamel from './img/small-camel.jpg'

const products = [
  {
    name: 'Big Camel',
    priceEur: 200,
    img: BigCamel,
    page: '/'
  },
  {
    name: 'Medium Camel',
    priceEur: 150,
    img: MediumCamel,
    page: '/big-camel'
  },
  {
    name: 'Small Camel',
    priceEur: 100,
    img: SmallCamel,
    page: '/big-camel'
  }
]

export {
  products
}
