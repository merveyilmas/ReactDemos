import React, { useState , useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Icon, Menu, Table } from 'semantic-ui-react'
import ProductService from '../services/ProductService';
import { addToCart } from '../store/actions/CartActions';
import { toast } from 'react-toastify';

export default function ProductList() {

  //bir fonksiyon/aksiyon çağırmak için dispatch kullanırız
  const dispatch = useDispatch()

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    let productService = new ProductService()
    productService.getProducts().then(result=>setProducts(result.data))
  },[])

  const handleAddToCart = (product)=>{
    dispatch(addToCart(product));
    toast.success(`${product.model} sepete eklendi.`)
  }

  return (
    <div>
      <Table celled>

        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İd</Table.HeaderCell>
            <Table.HeaderCell>Model</Table.HeaderCell>
            <Table.HeaderCell>ProName</Table.HeaderCell>
            <Table.HeaderCell>PlaName</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            products.map((product) => (
              <Table.Row key={product.id}>
                <Table.Cell><Link to={`/products/${product.id}`}>{product.id}</Link></Table.Cell>
                <Table.Cell>{product.model}</Table.Cell>
                <Table.Cell>{product.proName}</Table.Cell>
                <Table.Cell>{product.plaName}</Table.Cell>
                <Table.Cell>
                  <Button onClick={() => handleAddToCart(product)}>Sepete Ekle</Button>
                </Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>

      </Table>
    </div>
  )
}
