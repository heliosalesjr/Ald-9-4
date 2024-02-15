'use client'
import React from 'react';
import ReactPlayer from 'react-player';



function MatVideo1() {
    return (
        <div className='max-w-7xl mx-auto py-12'>
          <div className=" p-4 ">
            
    
            <div className="p-4 flex flex-col md:flex-row items-center">
            
              <div className="w-full md:w-1/2 pr-4">
                <div className=" mb-4">
                    <h1 className="text-4xl font-bold text-slate-700">Inflação</h1>
                </div>
                <h1 className=" text-slate-700 mb-4 pr-8">O primeiro vídeo mostra de uma forma genérica o que é inflação. 

Nos vídeos seguintes, o Professor Maurício Carvalho do canal Portal da Matemática OBMEP traz de uma forma um pouco mais detalhada sobre como é calculada a inflação, e, em seguida, alguns exemplos mais práticos de cálculos utilizando este conceito. </h1>
              </div>
              <div className="w-full md:w-1/2">
                <ReactPlayer url='https://youtu.be/0us8Oq7TeUg' width="100%" />
              </div>
            </div>
          </div>
        
        </div>
      );
    }

export default MatVideo1