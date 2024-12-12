import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

function CardProduct({ product }) {
  return (
    <Card>
      <CardImg top width="100%" src={product.image} alt={product.name} />
      <CardBody>
        <CardTitle tag="h5">{product.name}</CardTitle>
        <CardText>{product.description}</CardText>
        <Button color="primary">Ver Detalles</Button>
      </CardBody>
    </Card>
  );
}

export default CardProduct;
