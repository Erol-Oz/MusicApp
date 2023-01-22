import { useState } from 'react'
import { useHistory } from "react-router-dom";


function SignUp() {
  const [form, setForm] = useState({ fullname: "", email: "", pas: "", repas: "" })


  let history = useHistory();
  function handleClick() {
    history.push("/login");
  }


  const onSubmit = (e) => {
    e.preventDefault()
    if (form.fullname === "") {
      alert("Full name cannot be left blank! ")
      return false
    } if (form.email === "") {
      alert("Email cannot be left blank! ")
      return false
    } if (form.pas === "") {
      alert("Password cannot be left blank! ")
      return false
    } if (form.repas === "") {
      alert("Password cannot be left blank! ")
      return false
    } if (form.pas.length < 8) {
      alert("Minimum number of characters should be 8!")
      return false
    } if (form.repas.length < 8) {
      alert("Minimum number of characters should be 8!")
      return false
    } if (form.pas !== form.repas) {
      alert("Passwords do not match!")
      return false
    } if (!form.email.includes("@")) {
      alert("Must contain valid email!")
      return false
    } else {
      handleClick()

    }


  }
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })

  }

  return (

    <div className='minHeight d-flex justify-content-center align-items-center' id='signupdiv'>

      <div className='formdiv'>

        <form className='forminput' onSubmit={onSubmit}>
          <h1 id='signup'>Sign Up</h1>
          <br />
          <input name='fullname' placeholder='Full Name' value={form.fullname} onChange={onChangeInput} />
          <br />
          <input name='email' placeholder='Email' value={form.email} onChange={onChangeInput} />
          <br />
          <input type="password" name='pas' value={form.pas} placeholder='Password' onChange={onChangeInput} />
          <br />
          <input type="password" name='repas' value={form.repas} placeholder='Repeat Password' onChange={onChangeInput} />
          <br />

          <button id='buttonsign' > Sign Up</button>
        </form>
      </div>
    </div>

  )
}

export default SignUp
