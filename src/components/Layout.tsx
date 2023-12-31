import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header className='text-center h-20 flex justify-center items-center z-1 bg-whiteDark border-b-2 border-black'>
        <div className='flex flex-col relative mt-[-1rem]'>
          <h1 className='text-h1 font-bold'>Yrken och kompetenser</h1>
          <p className='absolute bottom-[-10px] left-[56px]'>
            Din väg från utbildningen till jobbet!
          </p>
        </div>
        {/* <div className="mb-4 absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-transparent to-primary"></div> */}
      </header>

      <main>
        <div
          className={`laptop:bg-desktopBackground bg-primary laptop:bg-cover h-[calc(100vh-80px)] w-screen fixed overflow-scroll top-[80px] left-0`}
        >
          <Outlet></Outlet>
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
