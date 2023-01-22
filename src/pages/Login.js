import { useState } from 'react'
function Login() {
  const [form, setForm] = useState({ fullname: "", pas: "" })
  const onSubmit = (e) => {
    e.preventDefault()
    if (form.fullname === "") {
      alert("Full name cannot be left blank. ")
      return false
    } if (form.pas === "") {
      alert("Password cannot be left blank. ")
      return false
    } if (form.pas.length < 8) {
      alert("Minimum number of characters should be 8")
      return false
    }


  }
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })

  }
  return (
    <div className='minHeight d-flex justify-content-center align-items-center' id='logindiv'>
      <div className='formdiv'>
        <form className='forminput' onSubmit={onSubmit}>
          <h1 id='signup'>Login</h1>
          <br />
          <input name='fullname' placeholder='Full Name' value={form.fullname} onChange={onChangeInput} />
          <br />
          <input type="password" name='pas' value={form.pas} placeholder='Password' onChange={onChangeInput} />
          <br />
          <button id='buttonsign'>Login</button>

        </form>
      </div>
    </div>
  )
}

export default Login
