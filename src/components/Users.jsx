import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../store/actions/usersActions";

function Users() {
    const {isLoading, users, error} = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if(isLoading) return <>Loading...</>

    if(error) return <>Error: {error.toString()}</>

  return (
    <div>
        <h1>Users</h1>
        {users.map((user) => (
            <p key={user.id}>{user.name}</p>
        ))}
    </div>
  )
}

export default Users