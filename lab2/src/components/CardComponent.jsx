import { Card, Button, Badge } from "react-bootstrap";
import menu1 from "../assets/images/menu1.jpg";
import menu2 from "../assets/images/menu2.jpg";
import menu3 from "../assets/images/menu3.jpg";
import menu4 from "../assets/images/menu4.jpg";

function CardComponent() {
  return (
    <div className="container p-5">
      <h1 className="text-left p-3">Our Menu</h1>
      <div className="d-flex">
        <Card style={{ width: "18rem" }} className="mx-3">
          <Badge bg="warning" className="position-absolute top-0 start-0 m-2">
            New
          </Badge>
          <Card.Img variant="top" src={menu1} />
          <Card.Body>
            <Card.Title>Margenrita Pizza</Card.Title>
            <Card.Text>Price: $19.99</Card.Text>
            <Button variant="dark" className="w-100 text-center">
              Buy
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mx-3">
          <Badge bg="warning" className="position-absolute top-0 start-0 m-2">
            New
          </Badge>
          <Card.Img variant="top" src={menu2} />
          <Card.Body>
            <Card.Title>Mushroom Pizza</Card.Title>
            <Card.Text>Price: $19.99</Card.Text>
            <Button variant="dark" className="w-100 text-center">
              Buy
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mx-3">
          <Badge bg="warning" className="position-absolute top-0 start-0 m-2">
            New
          </Badge>
          <Card.Img variant="top" src={menu3} />
          <Badge bg="warning" className="position-absolute top-0 start-0 m-2">
            New
          </Badge>
          <Card.Body>
            <Card.Title>Hawaiian Pizza</Card.Title>
            <Card.Text>Price: $19.99</Card.Text>
            <Button variant="dark" className="w-100 text-center">
              Buy
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mx-3">
          <Badge bg="warning" className="position-absolute top-0 start-0 m-2">
            New
          </Badge>
          <Card.Img variant="top" src={menu4} />
          <Card.Body>
            <Card.Title>Pesto Pizza</Card.Title>
            <Card.Text>Price: $19.99</Card.Text>
            <Button variant="dark" className="w-100 text-center">
              Buy
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CardComponent;
