import{ useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // datatype funtionName  = (argument)=>{ //funtion body }
  const handleFunction = (e) => {
    e.preventDefault();
    console.log(name,email,password);
    setName("");
    setEmail("");
    setPassword("");
  };
  
  return (
    <div  className="border-3 p-10 rounded-xl shadow-xl ">
        <h1 className="text-center text-2xl mb-6 font-bold">SignUp Form</h1>
      <form className=" flex flex-col items-center justify-center" onSubmit={handleFunction}>
        <input className="border-2 py-2 px-4 mb-4 rounded-sm"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a name"
        />
        <input className="border-2 py-2 px-4 mb-4 rounded-sm" 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter a email"
        />
        <input className="border-2 py-2 px-4 mb-4 rounded-sm"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter a Password"
        />
        <button className="hover:bg-black hover:text-white border-2 rounded-sm py-2 px-4 transition-all duration-300 ">Submit</button>
      </form>
    </div>
  );
};

export default Form;
