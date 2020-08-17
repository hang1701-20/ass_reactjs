import React, { useState, useEffect } from 'react';
import apiContact from '../../../../api/contactApi';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'

const Contact = props => {
  const { register, handleSubmit, watch, errors, reset  } = useForm();
  const history = useHistory();
  const [contacts, setContacts] = useState([])
  useEffect(() => {
    const getContacts = async () => {
      try {
        const { data } = await apiContact.getAll();
        setContacts(data);
      } catch (error) {
      }
    }
    getContacts()
  }, []);
  console.log(contacts)

  const onHandleSubmit = async (data) => {
    console.log(data);
    apiContact.create(data);
    history.push('/contact')
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
    setTimeout(() => {
      reset(); 
  }, 2000);
  }
  return (
    <div>
      <div className="contact">
        <div className="container">
          <ol className="breadcrumb">
            <li><a href="index.html">Home</a></li>
            <li className="active">Contact</li>
          </ol>
          {/*-start-contact--*/}
          <h3>Contact Us</h3>
          <div className="section group">
            <div className="col-md-6 span_1_of_3">
              <div className="contact_info">
                <h4>Find Us Here</h4>
                <div className="map">
                  <iframe width="100%" height={175} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.co.in/maps?f=q&source=s_q&hl=en&geocode=&q=Lighthouse+Point,+FL,+United+States&aq=4&oq=light&sll=26.275636,-80.087265&sspn=0.04941,0.104628&ie=UTF8&hq=&hnear=Lighthouse+Point,+Broward,+Florida,+United+States&t=m&z=14&ll=26.275636,-80.087265&output=embed" /><br /><small><a href="https://maps.google.co.in/maps?f=q&source=embed&hl=en&geocode=&q=Lighthouse+Point,+FL,+United+States&aq=4&oq=light&sll=26.275636,-80.087265&sspn=0.04941,0.104628&ie=UTF8&hq=&hnear=Lighthouse+Point,+Broward,+Florida,+United+States&t=m&z=14&ll=26.275636,-80.087265" style={{ color: '#666', textAlign: 'left', fontSize: '0.85em' }}>View Larger Map</a></small>
                </div>
              </div>
              <div className="company_address">
                <h4>Company Information :</h4>
                <p>500 Lorem Ipsum Dolor Sit,</p>
                <p>22-56-2-9 Sit Amet, Lorem,</p>
                <p>USA</p>
                <p>Phone:(00) 222 666 444</p>
                <p>Fax: (000) 000 00 00 0</p>
                <p>Email: <a href="mailto:info@example.com">info@mycompany.com</a></p>
                <p>Follow on: <a href="#">Facebook</a>, <a href="#">Twitter</a></p>
              </div>
            </div>
            <div className="col-md-6 span_2_of_3">
              <div className="contact-form">
                <form onSubmit={handleSubmit(onHandleSubmit)}>
                  <div>
                    <span><label>NAME</label></span>
                    <span><input name="name" type="text" ref=
                      {register({
                        required: true,
                        minLength: 4,
                        pattern: /^\S{1}.{0,24}$/i
                      })} className="textbox" />
                      {errors.name && errors.name.type === "required" && <span className="text-danger">Phải nhập tên</span>}
                      {errors.name && errors.name.type === "minLength" && <span className="text-danger">Lon hon 4 ky tu</span>}
                      {errors.name && errors.name.type === "pattern" && <span className="text-danger">ko đc cách</span>}</span>
                  </div>
                  <div>
                    <span><label>E-MAIL</label></span>
                    <span><input name="email" ref={register({required: true })} type="text" className="textbox" /></span>
                  </div>
                  <div>
                    <span><label>MOBILE</label></span>
                    <span><input name="mobile" ref={register({required: true })} type="text" className="textbox" /></span>
                  </div>
                  <div>
                    <span><label>SUBJECT</label></span>
                    <span><textarea name="subject" ref={register({required: true })} defaultValue={" "} /></span>
                  </div>
                  <div>
                    <span><input type="submit" className="mybutton" defaultValue="Submit" /></span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

Contact.propTypes = {

}

export default Contact
