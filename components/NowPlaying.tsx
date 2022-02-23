import { animate } from 'motion';
import React, { useEffect } from 'react';
import useSWR from 'swr';
import fetcher from '../lib/fetcher';
import { NowPlayingProps } from '../types/spotify';

function AnimatedBars() {
  useEffect(() => {
    animate(
      '#bar1',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(1.5) translateY(-0.082rem)',
          'scaleY(1.0) translateY(0rem)'
        ]
      },
      {
        duration: 1.0,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    );
    animate(
      '#bar2',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(3) translateY(-0.083rem)',
          'scaleY(1.0) translateY(0rem)'
        ]
      },
      {
        delay: 0.2,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    );
    animate(
      '#bar3',
      {
        transform: [
          'scaleY(1.0)  translateY(0rem)',
          'scaleY(0.5) translateY(0.37rem)',
          'scaleY(1.0)  translateY(0rem)'
        ]
      },
      {
        delay: 0.3,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    );
  }, []);

  return (
    <div className="w-auto flex mb-9 items-end overflow-hidden">
      <span
        id="bar1"
        className="w-1 mr-[3px] h-2 bg-gray-mid-light dark:bg-gray-mid-dark opacity-75"
      />
      <span
        id="bar2"
        className="w-1 mr-[3px] h-1 bg-gray-mid-light dark:bg-gray-mid-dark"
      />
      <span
        id="bar3"
        className="w-1 h-3 bg-gray-mid-light dark:bg-gray-mid-dark opacity-80"
      />
    </div>
  );
}

export const NowPlaying = () => {
  const { data } = useSWR<NowPlayingProps>('/api/spotify', fetcher);

  return data?.isPlaying ? (
    <div className="flex gap-2">
      <div className="flex flex-col text-right">
        <span className="font-semibold text-xl">
          <a
            href={data.songUrl}
            target="_blank"
            className="hover:text-gray-dark  dark:hover:text-gray-light"
            rel="noopener noreferrer"
          >
            {data.title}
          </a>
        </span>
        <span className="font-thin">{data.artist}</span>
      </div>

      <AnimatedBars />
    </div>
  ) : (
    <div className="flex gap-2">
      <div className="flex flex-col text-right">
        <span className="font-semibold text-xl">Not playing</span>
        <span className="font-thin">Spotify</span>
      </div>
      <i className="fa-brands fa-spotify pt-1 text-2xl text-[#18d985]"></i>
    </div>
  );
};
