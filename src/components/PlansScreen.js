import React, { useEffect, useState } from 'react'
import "./css/planScreen.css"
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

export default function PlansScreen() {
    const user=useSelector(selectUser);
    const [products,setProducts]=useState("");
    const plans=[
      {name:"Mobile",pricing:"₹149",resolution:"480p",screens:1},
      {name:"Basic",pricing:"₹199",resolution:"720p",screens:2},
      {name:"Standard",pricing:"₹499",resolution:"HDR",screens:3},
      {name:"Premium",pricing:"₹649",resolution:"4K + HDR",screens:4},
  ]
    useEffect(()=>{
        const getData=async()=>{
          const res=await axios.get("https://netflix-backend-six.vercel.app/plan",{
            email:user.email
          });
          
          if(res.data.success){
            setProducts(res.data.data.plan);
          }
          else{
            setProducts("No Active Plan");
          }
        }

        getData();
    },[])

    const updatePlan=async(e,plan)=>{
        e.preventDefault();
        const res=await axios.post("https://netflix-backend-six.vercel.app/plan",{
          email:user.email,
          plan
        });

        if(res.data.success){
          setProducts(plan);
    
          alert("Plan Updated to "+plan.name);
        }
    }
  return (
    <div className='plansScreen'>
    <h3>Active Plan( {products.name})</h3>
    {plans.map((plan)=>(
      <div key={plan.name} className='plan'>
          <div className='info'>
              <h3>{plan.name}</h3>
              <h4>{plan.pricing}/month</h4>
              <h5>Quality: {plan.resolution}</h5>
              <h5>No. of Screens: {plan.screens}</h5>
          </div>
          <button onClick={(e)=>updatePlan(e,plan)}>SubScribe</button>
      </div>
    ))}
    </div>
  )
}
