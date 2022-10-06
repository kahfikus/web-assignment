import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import  {GET_PHONE_NUMBER}  from "../Graphql/Queries";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  const [nameSearched, setnameSearched] = useState("");
  const [getPhone, { data, error }] = useLazyQuery(GET_PHONE_NUMBER, {
    variables: { name: nameSearched },
  });

  if (error) return <h1> Error found</h1>;

  if (data) {
    console.log(data);
  }

  return (
    
    <div className="home">
      <h1>Search For Phone Number</h1>
      <input
        type="text"
        placeholder="Contact name..."
        onChange={(event) => {
          setnameSearched(event.target.value);
        }}
      />
      <button onClick={() => getPhone()}> Search</button>
      <div className="contact">
        {data && (
          <>
            <h1>  </h1>
            <h1>
              {" "}
              Temperature: 
            </h1>
            <h1>
              Description: 
            </h1>
            <h1>Wind Speed: </h1>
          </>
        )}
      </div>
    </div>
    

  );
}

export default Home;