import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import contactapi from './../../../../api/contactApi'
import Swal from 'sweetalert2'

const Contacts = props => {
    const [contact, setContact] = useState([])
    const [Sotrang, setSotrang] = useState(0);
    const tongSp = contact.length;
    const tinhTrang = Math.ceil(tongSp / 10);
    const mang = [];
    for (var i = 1; i <= tinhTrang; i++) {
        mang.push(i)
    }

    
    console.log(contact);
    useEffect(() => {
        getcontact()
    }, []);

    const getcontact = async () => {
        try {
            const { data } = await contactapi.getAll();
            setContact(data);
        } catch (error) {
        }
    }

    const removeHandle = async (id) => {
        try {
            const data = await contactapi.remove(id);
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#30810d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.value) {
                    getcontact();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
        } catch (error) {
            console.log("failed to request API: ", error);
        }
    }

    return (
        <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more
          information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official
            DataTables documentation</a>.</p>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">email</th>
                                    <th scope="col">mobile</th>
                                    <th scope="col">subject</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contact.map((el, index) => (
                                    index < (((Sotrang + 1) * 10)) && index > ((Sotrang * 10) - 1) && <tr key={index}>
                                        <th scope="row">{el.id}</th>
                                        <td>{el.name}</td>
                                        <td>{el.email}</td>
                                        <td>{el.mobile}</td>
                                        <td>{el.subject}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => removeHandle(el.id)}>Xóa</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        {Sotrang > 0 && <li class="page-item" onClick={() => setSotrang(Sotrang - 1)}><a class="page-link" href="#">Previous</a></li>
                                        }
                                        {mang && mang.map((sotrang) =>
                                            <li class="page-item" onClick={() => setSotrang(sotrang - 1)}><a class="page-link" href="#"> {sotrang}</a></li>
                                        )}
                                        {Sotrang < (mang.length - 1) &&
                                            <li class="page-item" onClick={() => setSotrang(Sotrang + 1)}><a class="page-link" href="#">Next</a></li>}
                                    </ul>
                                </nav>

                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
