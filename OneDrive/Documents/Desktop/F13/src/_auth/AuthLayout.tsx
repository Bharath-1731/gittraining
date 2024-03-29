import {Outlet, Navigate} from 'react-router-dom';
import SignSvg from "/assets/images/side-img.jpeg";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ):(
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet/>
          </section>

          <img 
            src={SignSvg}
            alt="logo"
            className=" x1:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  )
}

export default AuthLayout