import logo from './logo.svg';
import './App.css';
import Cube from 'react-cube-3d-animation'
import React, { useEffect } from 'react';


function App ()
{
  const [data, setData] = React.useState([])
  React.useEffect(() =>
  {

    const ApiLink = 'https://fakestoreapi.com/products/'
    const dataFetching = async () =>
    {
      const data = await fetch(ApiLink)

      const jdtaa = await data.json()
      setData(jdtaa)

    }
    dataFetching()
  }, [])
  console.log(data)
  return (
    <>
      <h1>RMart</h1>
      <p className="degp">Explore hera for more product</p>
      <Cube top_Color= '#f30e58' box_plate_linear_gradient_first_color='#6163a5' box_plate_linear_gradient_Second_color='#0acfcd' box_Shadow_Color='rgb(37,209,29)' size='5' />
            <div>
        {
          data.map((e) =>
          {
            return (<>
              <div className="imgd">
              <div className="imgbackg" style={{backgroundImage:`url(${e.image})`
            }}>
              </div>
              </div>
              <div className="titledeg">
              
              <h2>{e.title}</h2>
              </div>
              <div className="pdrdegin">
                <p>{e.price}</p>
                <p>{e.description}</p>
                <p>{e.rating.count}</p>
                <p>{e.rating.rate}</p>
                <button>Buy Product</button>
              </div>


            </>)
          })

        }


      </div>

    </>
  );
}

export default App;
