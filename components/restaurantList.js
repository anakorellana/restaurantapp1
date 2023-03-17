import { gql, useQuery } from '@apollo/client';
import Dishes from "./dishes"
import { useContext, useState, useEffect } from 'react';
// import Image from "next/image"

import AppContext from "./context"
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  
  Row,
  Col
} from "reactstrap";

function RestaurantList(props) {
  const [restaurantID, setRestaurantID] = useState(0)
  const { cart, user, restaurantss } = useContext(AppContext);
  // const [state, setState] = useState(cart)
  const [isLoading, setIsLoading] = useState(true);
  const [dishes, setDishes] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [searchQueryDishes, setQueryDishes] = useState([])
  const [selectedDish, setSelectedDish] = useState()




  if (!user) {
    return <div className="text-center"><img
    src="http://localhost:1337/uploads/00fbe34d41ca4efdbacce667152e5ffb.png"
    width="1000"
    height="500"
    
  /></div>
  }

  function getRestaurants() {
    setIsLoading(false);
    let newRestaurants = []
    if (typeof window !== 'undefined') {
      newRestaurants = JSON.parse(localStorage.getItem('restaurants') || '');
      // dishes = JSON.parse(localStorage.getItem('dishes') || '');
    }

    if (!newRestaurants.length && user) {
      const GET_RESTAURANTS = gql`

  query {
    restaurants {
      id
      name
      description
      
      dishes {
      
        id
        name
        description
        price
        image {
          url
        }
      }
      image {
        url
      }
    }
  }
`;
      const { loading, error, data } = useQuery(GET_RESTAURANTS)


      if (loading) return <p>Loading...</p>;
      if (error) return <p>ERROR</p>;
      if (!data) return <p>Not found</p>;
      console.log(`Query Data: ${data.restaurants}`)


      localStorage.setItem('restaurants', JSON.stringify(data.restaurants))


      const res = []
      newRestaurants.forEach((rest) => rest.dishes.forEach((dish) => res.push(dish)))
      setDishes(res)

      console.log("Dishes", res)

      localStorage.setItem('dishes', JSON.stringify(res))
    }
    else {
      const res = []
      console.log('restaurants', newRestaurants)

      newRestaurants?.forEach((rest) => rest.dishes.forEach((dish) => res.push(dish)))
      setDishes(res)
    }

    setRestaurants(newRestaurants)
  }
  useEffect(() => {

    if (isLoading) {
      getRestaurants()
    }

  }, [isLoading])


  let searchQuery = restaurants?.filter((res) => {
    return res.name.toLowerCase().includes(props.search)
  })

  useEffect(() => {
  	const dishList = dishes.filter((dish) => {
      console.log(dish.name.toLowerCase(), props.search, dish.name.toLowerCase().includes(props.search))
    return dish.name.toLowerCase().includes(props.search.trim())
  } )
    // searchQuery = restaurants?.filter((r) => {
    //   console.log(r,dishList.find(d =>r.dishes.find(dish => dish.name=== d.name)))
    //   return dishList.find(d =>r.dishes.find(dish => dish.name=== d.name))
    // })
    setQueryDishes(dishList)
    
}, [props.search])

  // const searchQueryDishes = dishes?.filter((res) => {
  //   console.log(res.name.toLowerCase(), props.search, res.name.toLowerCase().includes(props.search))
  //   return res.name.toLowerCase().includes(props.search)

  // })
  // console.log('dishes', searchQueryDishes, dishes)

  // console.log(props.search)

  // let restId = searchQuery[0].id

  // definet renderer for Dishes
  const renderDishes = (restaurantID) => {
    return (<Dishes restId={restaurantID} restaurants={restaurants} selectedDish= {selectedDish}> </Dishes>)
  };


  const dishesList = () => {
    console.log("inside", searchQueryDishes, props.search)
    return searchQueryDishes?.map((res) => (
      <Col xs="6" sm="4" key={res.id}>

        <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
          <CardImg
            top={true}
            style={{ height: 200 }}
            src={
              `http://localhost:1337` + res.image.url
            }
          />
          

          <CardBody>
            <CardText style={{ fontFamily: 'Work Sans' }}>{res.description}</CardText>
          </CardBody>
          <div className="card-footer">
            <div class="text-center">
              <Button style={{ alignItem: 'center', fontFamily: 'Anton', backgroundColor: "#f5bcb1", color: "black", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)" }} 
              onClick={() => {
                setSelectedDish(res)
                setRestaurantID(res.id)}}
                 >{res.name} 
                
                </Button>
            </div>
          </div>
        </Card>
      </Col>
    )
    )
  }

  if (searchQuery.length > 0 || searchQueryDishes.length > 0) {
    const restList = searchQuery.map((res) => (
      <Col xs="6" sm="4" key={res.id}>
        <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
          <CardImg
            top={true}
            style={{ height: 200 }}
            src={
              `http://localhost:1337` + res.image.url
            }

          />

          <CardBody>
            <CardText style={{ fontFamily: 'Work Sans' }}>{res.description}</CardText>
          </CardBody>
          <div className="card-footer">
            <div class="text-center">
              <Button style={{ alignItem: 'center', fontFamily: 'Anton', backgroundColor: "#f5bcb1",
               color: "black", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)" }} 
              onClick={() => {
              setSelectedDish()
              setRestaurantID(res.id)}}
              >

                {res.name}</Button>
            </div>
          </div>
        </Card>
      </Col>
    ))

    return (
      <Container>

        {/* {restaurantss.map((rest, index)=>
        <Col xs="6" sm="4" key={res.id})>
        </Col>} */}

        <Row xs='3'>
          {props.search.length > 0 && dishesList()}
        </Row>

        <Row xs='3'>
          {restList}
        </Row>

        <Row xs='3'>
          {renderDishes(restaurantID)}
        </Row>

      </Container >
        
    )
  } else {
    return <h3> No Restaurants Found</h3>
  }
}

export default RestaurantList