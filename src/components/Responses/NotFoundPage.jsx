import React from 'react'
import NotFound from '../images/404_minified.svg'

export default function NotFoundPage() {
  return (
    <div className='container text-center mt-6 p-5'>
      <img src={NotFound} alt="" />
      <h1 className='mt-3'>Ooooops, parece que nos olvidamos de algo o estas tratando de llegar a un lugar que todavia no tenemos</h1>
    </div>
  );
}
