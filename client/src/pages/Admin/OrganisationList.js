import React, { useEffect, useState } from 'react'
import Layout from '../../components/Shared/Layout/Layout'
import API from '../../services/api';
import moment from 'moment';

const OrganisationList = () => {
    
        const [data, setData] = useState([]);
        //find donar records
        const getDonors = async () => {
          try {
            const { data } = await API.get("/admin/org-list");
            console.log(data);
            if (data?.success) {
              setData(data?.orgData);
            }
          } catch (error) {
            console.log(error);
          }
        };
      
        useEffect(() => {
          getDonors();
        }, []);
      
        //DELETE FUNCTION
        const handelDelete = async (id) => {
          try {
            let answer = window.prompt(
              "Are You SUre Want To Delete This Organisation",
              "Sure"
            );
            if (!answer) return;
            const { data } = await API.delete(`/admin/delete-donor/${id}`);
            alert(data?.message);
            window.location.reload();
          } catch (error) {
            console.log(error);
          }
        };
      
        return (
          <Layout>
            <table className="table ">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((record) => (
                  <tr key={record._id}>
                    <td>{record.organisationName}</td>
                    <td>{record.email}</td>
                    <td>{record.phone}</td>
                    <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handelDelete(record._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Layout>
        );
      };
      
      

export default OrganisationList