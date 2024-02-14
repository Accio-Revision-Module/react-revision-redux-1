import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchUsersToolkit } from "../store-toolkit/actions/usersActions";

function UsersToolkit() {
    const {isLoading, users, error} = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersToolkit("hello"))
    }, [])

    if(isLoading) return <>Loading...</>

    if(error)  {
      console.log(error)
      return <>Error: {error.message.toString()}</>
    }

  return (
    <div>
        <h1>UsersToolkit</h1>
        {users.map((user) => (
            <p key={user.id}>{user.name}</p>
        ))}
    </div>
  )
}

export default UsersToolkit