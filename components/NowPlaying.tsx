import React from 'react'

export const NowPlaying = () => {
  return (
  <div className="flex gap-2">
            <div className='flex flex-col text-right'>
              <span className="font-semibold text-xl">Not playing</span>
              <span className='font-thin'>Spotify</span>
            </div>
              <i className="fa-brands fa-spotify pt-1 text-2xl text-[#18d985]"></i>
          </div>
  )
}
