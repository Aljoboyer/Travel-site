//from user components

const [users, setUsers] = useState([]);
const [deleteuser,setDeleteuser] = useState('')
//delete an user
const HandledeleteUser = id => {
    const proceed = window.confirm('Are you sure? You want to delte--!')
    if(proceed)
    {
        const url = `http://localhost:5000/users/${id}`
    fetch(url, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0)
        {
            setDeleteuser('User Deleted')
            const remainuser = users.filter(user => user._id !== id)
            setUsers(remainuser)
        }
    })
    }
}
useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
},[])

<ul>
{
    users.map(user => <li className="mt-4 mb-2" key={user._id}>{user.name} {user.email} 
    <button  onClick={() => HandledeleteUser(user._id)}  className="btn btn-danger fw-bold fs-3 ms-4">X</button>
    <Link to={`/users/update/${user._id}`}><button className="ms-4 btn btn-warning text-dark fw-bold fs-4">Edit</button> </Link>
    </li>)
}
</ul>

//from update components

const {id} = useParams();
const [user, setUser] = useState({});
useEffect(() => {
    const url = `http://localhost:5000/users/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setUser(data))
},[])

//from add user components
const namehref = useRef();
const emailhref = useRef();
const [success , setSuccess] = useState('')
const Addhandler = (e) => {
    e.preventDefault();

    const name = namehref.current.value;
    const email = emailhref.current.value;

    const newuser = {name:name, email:email}
    console.log(newuser)
    fetch('http://localhost:5000/users', {
        method: 'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newuser)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId)
        {
            setSuccess('user added successfully')
            e.target.reset();
        }
    })
}

//from update user
const {id} = useParams();
const [user, setUser] = useState({});


useEffect(() => {
    const url = `http://localhost:5000/users/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setUser(data))
},[])
const NamechangeHandle = e => {
    const updatedname = e.target.value;
    const updateduser = {name: updatedname,  email: user.email}
    setUser(updateduser)
}
const EmailchangeHandle = e => {
    const updatedemail = e.target.value;
    const updateduser = {name:user.name, email:updatedemail}
    setUser(updateduser)
}
const UpdateHandler = (e) => {

const url = `http://localhost:5000/users/${id}`;
    fetch(url, {
        method: 'PUT',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0)
        {
            alert('Updated Successfully')
            setUser({})
        }
    })
e.preventDefault();

}


//from user 
const [users, setUsers] = useState([]);


const HandledeleteUser = (id) => {
    const url = `http://localhost:5000/users/${id}`
    fetch(url, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount> 0)
        {
            const newusers = users.filter(user => user._id !== id)
            setUsers(newusers)
            alert('successfull delete')
        }
    })
}
useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data=> setUsers(data))
}, [])