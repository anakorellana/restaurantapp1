import React, { useState , useContext} from "react";
import Cart from "../components/cart"
import {ApolloProvider,ApolloClient,HttpLink, InMemoryCache} from '@apollo/client';
import {gql,useQuery} from '@apollo/client';
import RestaurantList from '../components/restaurantList';
// import {dishesList} from '../components/restaurantList';
import { InputGroup, InputGroupAddon,Input} from "reactstrap";
import { MDBBtn } from 'mdb-react-ui-kit';
import Dishes from "../components/dishes";
import AppContext from "../components/context";


function Home() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
    console.log(`URL: ${API_URL}`)
    const [query, setQuery] = useState("");
    const [queryD, setQueryD] = useState("");
    const link = new HttpLink({ uri: `${API_URL}/graphql`})
    const cache = new InMemoryCache()
    const client = new ApolloClient({link,cache});
    const {user, restaurants, dishes} = useContext(AppContext);
    console.log(user, restaurants)
 

    return (

        <ApolloProvider client={client}>
          <div className="search">
            <br></br>

              <h4 style={{fontFamily: 'Anton'}}> Find Local Restaurants</h4>
              <br></br>
                <InputGroup>
                {/* <MDBBtn color='warning'> */}
                <InputGroupAddon addonType="append" style={{color:'warning',alignItem:'center', fontFamily: 'Anton'}}> Search </InputGroupAddon>
                <Input
                    onChange={(e) =>
                    setQuery(e.target.value.toLowerCase())
                    }
                    value={query}

                    
                />
                {/* </MDBBtn> */}
                </InputGroup>
                <br></br>
            </div>
            <RestaurantList search={query} />
           
            <Cart> </Cart>
        </ApolloProvider>
    );
  }
  export default Home;
  