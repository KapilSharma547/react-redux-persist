import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux/slices/userSlice";
import "./profile.css";
import { fetchTodos } from "../redux/slices/todoSlice";
import { useEffect } from "react";
function Profile() {
  const { user } = useSelector((state) => state.user);
  const { data } = useSelector((state) => state.todo);
  console.log("todoData :>> ", data);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <>
      <div className="center">
        <div className="profile">
          <h1>Profile</h1>
          <p>
            <strong>Name: </strong>
            {user?.name}
          </p>
          <p>
            <strong>Email: </strong>
            {`${user?.email}`}
          </p>
          <span onClick={handleSignOut}>Sign Out</span>
        </div>
      </div>
      <div className="center">
        <div className="profile">
          <button onClick={() => dispatch(fetchTodos())} >Mack Api Call</button>

          <div className="container">
            <h2>Api Call Example</h2>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                {data?.slice(1, 10).map((item) => {
                  return (
                    <tr key={item.id.toString()}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default Profile;
