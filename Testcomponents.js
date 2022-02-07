import React, { useEffect , useState } from "react";
import axios from "axios";

export default function Testcomponents(){
    const [tableData, setTableData] = useState([]);
    // const [tableData,setTableData] = useState([]);

    useEffect( () => {
            axios
                .get("https://jsonplaceholder.typicode.com/posts")
                .then((res) => {
                    console.log("response", res);
                    setTableData(res.data);
                })
                .catch((err) => {
                    console.log("err", err);


                });
        },[]);
        return(
            
                <table>
                    <thead>
                    <tr>
                        <th>id</th> <th>title</th> <th>body</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((v) => {
                        return(
                            <tr>
                                <th>{v.id}</th>
                                <th>{v.title}</th>
                                <th>{v.body}</th>
                            </tr>

                        );
                    })

                    }
                    </tbody>
                </table>
            
        );





    }







