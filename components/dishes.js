import {useRouter} from "next/router"
import {gql,useQuery} from '@apollo/client';
import {useState, useContext} from 'react'
import AppContext from "./context"
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col} from "reactstrap";

  function Dishes({restId, restaurants, selectedDish}){
  const [restaurantID, setRestaurantID] = useState()

  const {addItem} = useContext(AppContext)

const GET_RESTAURANT_DISHES = gql`
  query($id: ID!) {
    restaurant(id: $id) {
      id
      name
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`;

  const router = useRouter();

  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: restId},
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR here</p>;
  if (!data) return <p>Not found</p>;

  let restaurant = data.restaurant;
 console.log(selectedDish , restId)
if( selectedDish){
  return(
  <Col xs="6" sm="4" style={{ padding: 0 }} key={selectedDish.id}>
  <Card style={{ margin: "0 10px" }}>
    <CardImg
      top={true}
    
      style={{ height: 200 }}
      
      src={`http://localhost:1337${selectedDish.image.url}`}
    />
    <CardBody>
      <CardTitle>{selectedDish.name}</CardTitle>
      <CardText style={{ fontFamily: 'Work Sans'}}>{selectedDish.description}</CardText>
    </CardBody>
    <div className="card-footer">
      <Button color="info"
        outline
        // color="primary"
        onClick = {()=> addItem(selectedDish)}
      >
        + Add To Cart
      </Button>
      
    </div>
  </Card>
</Col>
  )

}
  if (restId > 0 && restaurant?.dishes) {

    return (
      <>
          {restaurant.dishes.map((res) => (
            <Col xs="6" sm="4" style={{ padding: 0 }} key={res.id}>
              <Card style={{ margin: "0 10px" }}>
                <CardImg
                  top={true}
                
                  style={{ height: 200 }}
                  
                  src={`http://localhost:1337${res.image.url}`}
                />
                <CardBody>
                  <CardTitle>{res.name}</CardTitle>
                  <CardText style={{ fontFamily: 'Work Sans'}}>{res.description}</CardText>
                </CardBody>
                <div className="card-footer">
                  <Button color="info"
                    outline
                    // color="primary"
                    onClick = {()=> addItem(res)}
                  >
                    + Add To Cart
                  </Button>
                  
                </div>
              </Card>
            </Col>
          ))}
        </>
        )}
        else{
          return <h4></h4>
        }
    }
    export default Dishes