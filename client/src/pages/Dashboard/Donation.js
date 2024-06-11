import React, { useEffect, useState } from 'react'
import Layout from './../../components/Shared/Layout/Layout';
import moment from 'moment';
import API from '../../services/api';
import { useSelector } from 'react-redux';

const Donation = () => {
    const {user}=useSelector((state)=>state.auth);
    const [data, setData] = useState([]);
    //find donor records
    const getDonors = async () => {
      try {
        const { data } = await API.post("/inventory/get-inventory-hospital",{
            filters:{
            inventoryType:'in',
            donor:user._id,
        }

        });
        console.log(data);
        if(data?.success)
          {
              setData(data?.inventory)
          }
        
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getDonors();
    }, []);
    return (

      <Layout>
        <div className="container mt-20px">

       
                <table className="table">
            <thead>
              <tr>
                <th scope="col">Blood Group</th>
                <th scope="col">Invenotry Type</th>
                <th scope="col">Quantity</th>
                <th scope="col">Email</th>
                <th scope="col">Date and Time</th>
              </tr>
            </thead>
            <tbody>
             {data?.map((record)=>(
              <tr key={record._id}>
                <td>{record.bloodGroup}</td>
                <td>{record.inventoryType}</td>
                <td>{record.quantity}</td>
                <td>{record.email}</td>

               
                <td>{moment(record.createdAt).format('DD/MM/YYYY hh:mm A')}</td>
  
              </tr>
             ))}
            </tbody>
          </table>
          </div>
      </Layout>
    );
}

export default Donation
