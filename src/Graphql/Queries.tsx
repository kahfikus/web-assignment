import { gql, useQuery } from "@apollo/client";
import React from "react";

export const GET_PHONE_NUMBER=gql 
`query GetContactList (
    $distinct_on: [contact_select_column!], 
    $limit: Int, 
    $offset: Int, 
    $order_by: [contact_order_by!], 
    $where: contact_bool_exp
) {
  contact(
      distinct_on: $distinct_on, 
      limit: $limit, 
      offset: $offset, 
      order_by: $order_by, 
      where: $where
  ){
    created_at
    first_name
    id
    last_name
    phones {
      number
    }
  }
}
`;

//  function GET_PHONE_NUMBER_QUERIES(){
//   const {error, data, loading} = useQuery(GET_PHONE_NUMBER);
  
//   console.log({error, loading, data});


//   if(loading) return <div>spinner</div>

//   if(error) return <div>hello</div>
  
//   return (
//   <div className="App">
//       {data.GetContactList.map}
//   </div>
//   );
// } 

