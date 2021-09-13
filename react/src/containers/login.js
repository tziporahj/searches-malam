import { connect } from "react-redux"
import { useRef, useState } from 'react'
import { setUserEmail, setUserPassword } from '../redux/actions/users'
import axios from 'axios'

const mapStateToProps = (state) => {
    return {
        user: state.usersReducer.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setEmail: (name) => { dispatch(setUserEmail(name)) },
        setpassword: (password) => { dispatch(setUserPassword(password)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(function Users(props) {
    // export default function Users(props) {

    const { user, setEmail, setpassword } = props;
    // const emailRef=useRef(null)
    // const passwordRef=useRef(null)

    // const email=()=>{
    //  console.log(emailRef.current.value);
    // }
    async function newUser(e) {
        e.preventDefault();
        axios.post('http://localhost:3005/users/saveUser', {
            email: user.email,
            password: user.password
        }).then(function (response) {
            debugger
            if (response.status == 200) {
                props.history.push('/search')
            }
        })
    }

    return (
        <>
            {/* <input  ref={emailRef} >email</input>
                     <input ref={passwordRef} >password</input> */}

            <form >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input className="form-control" value={user.name} onChange={(e) => { setEmail(e.target.value) }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control mb-3" value={user.password} onChange={(e) => { setpassword(e.target.value) }} id="exampleInputPassword1" placeholder="Password" />
                </div>

                <button onClick={newUser} className="btn btn-primary">משתמש חדש</button>

            </form>
            <button onClick={() => { props.history.push('/search') }}>searchhhhhhhhhhhhhhhhhhhhhh</button>

        </>

    )
})