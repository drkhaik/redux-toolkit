import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/slice/counterSlice';
import axios from "axios"
import { useEffect, useState } from 'react';
import { fetchAllUser } from './redux/slice/userSlice';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);
  const listUser = useSelector(state => state.user.listUser);
  const isLoading = useSelector(state => state.user.isLoading);
  const isError = useSelector(state => state.user.isError);

  // const [listUser, setListUser] = useState([]);

  useEffect(() => {
    dispatch(fetchAllUser());

  }, [])

  // const fetchAllUser = async () => {
  //   let res = await axios.get("http://localhost:8081/users/all");
  //   console.log("check res", res.data)
  //   // setListUser(res.data ? res.data : [])
  // }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>Hello world with React and Drkhaik!</h1>
        <div className='btn-action'>
          <button onClick={() => dispatch(increment())}>Increase</button>
          <button onClick={() => dispatch(decrement())}>Decrease</button>
        </div>
        <br />
        <div>Count = {count}</div> */}
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Username</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* <tbody>

            {listUser && listUser.length > 0 && listUser.map((item, index) => {
              return (
                <tr key={`user-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                  <td>
                    <button
                      className='btn btn-danger'
                    // onClick={() => { handleDeleteUser(item) }}
                    >Delete</button>
                  </td>
                </tr>
              )
            })}

          </tbody> */}
          <tbody>
            {isError === true ?
              <>
                <tr> <td style={{ 'textAlign': 'center' }} colSpan={4}>Something went wrong...</td> </tr>
              </>
              :
              <>
                {isLoading === true ?
                  <tr> <td style={{ 'textAlign': 'center' }} colSpan={4}>Loading...</td> </tr>
                  :
                  <>
                    {listUser && listUser.length > 0 && listUser.map((item, index) => {
                      return (
                        <tr key={`user-${index}`}>
                          <td>{item.id}</td>
                          <td>{item.email}</td>
                          <td>{item.username}</td>
                          <td>
                            <button
                              className='btn btn-danger'
                            // onClick={() => { handleDeleteUser(item) }}
                            >Delete</button>
                          </td>
                        </tr>
                      )
                    })}
                  </>
                }
              </>
            }


          </tbody>
        </table>
      </header>

    </div>
  );
}

export default App;
