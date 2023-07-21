import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { auth } from "../../../firebase.config";
import { Navigate } from "react-router-dom";
import { useState } from "react";

type LoginProps = {
  email: string,
  password: string
}

export function Login({
  email,
  password
}: LoginProps) {
  const [ emailValue, setEmailValue ] = useState(email);
  const [ passwordValue, setPassowordValue ] = useState(password);
  const [ isAutenticated, setIsAutenticated ] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredencial) => {
        const user = userCredencial.user;
        console.log("Usuario logado", user);
        setIsAutenticated(true)
      })
      .catch((error) => {
        console.error("Erro ao logar", error);
      })
  }

  if(isAutenticated){
    return <Navigate to="/dashboard" />
  }

  return (
    <>
      <main className="w-screen h-screen flex items-center justify-center">


        <form 
          className="flex flex-col border border-slate-900 items-center justify-center p-16 rounded-md"
          onSubmit={handleSubmit}
          >
          <h1 className="text-3xl font-semibold">Login</h1>

          <div className="flex flex-col mt-8">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="name@email.com"
              className="border rounded p-2 mb-4"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              placeholder="*********"
              className="border rounded p-2 mb-8"
              value={passwordValue}
              onChange={(e) => setPassowordValue(e.target.value)}
            />
          </div>


          <button
            className="bg-slate-700 text-slate-50 px-10 py-2 rounded hover:bg-slate-600"
            type="submit"
          >ENTRAR</button>
        </form>
      </main>
    </>
  );
}