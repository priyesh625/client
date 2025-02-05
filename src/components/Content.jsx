import React from 'react';

function Content({ item }) {
  console.log(item);

  return (
    <div className="container hover:backdrop-blur-2xl transiton duration-300 border-2 border-black py-4 mx-auto flex flex-col items-center justify-center w-70 max-w-[70%]">
      <div className="flex justify-center h-70 w-60 ">
        <img className='object-cover' src={item.image} alt={item.name} />
      </div>
      <div className="text-white break-words overflow-hidden text-ellipsis max-w-[200px] max-h-[200px] space-y-4 ">
        <h2 className="text-center">{item.name}</h2>
        <p className="text-sm">{item.description}</p>
      </div>
      <button className="bg-gray-800 px-20 py-1 hover:bg-gray-700 transition duration-300 text-white mt-3">Read more</button>
    </div>
  );
}

export default Content;
