import React, { useEffect, useState } from "react";
import getNowPlayingItem from "./fetch";
import PlayingAnimation from "./animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import SpotifyEmbed from "./SpotifyEmbed"; // sesuaikan path jika beda folder

const Card = () => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null); // null awal
  const [error, setError] = useState(null);

  useEffect(() => {
    let intervalId;

    const fetchData = async () => {
      try {
        setError(null);
        const data = await getNowPlayingItem();
        // data bisa: false atau object { isPlaying, ... }
        setResult(data || false);
      } catch (e) {
        setResult(false);
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    intervalId = setInterval(fetchData, 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  const isPlaying = Boolean(result && typeof result === "object" && result.isPlaying);

  return (
    <div className="mt-3 flex justify-center w-full">
      {loading ? (
        <div className="flex justify-center mb-8">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-black h-12 w-12 mb-4"></div>
        </div>
      ) : (
        <div className="relative w-full mb-8 grid grid-cols-2 gap-2 border-2 border-gray-500 p-4 rounded-lg backdrop-filter backdrop-blur-lg bg-white bg-opacity-30">
          {isPlaying && result.albumImageUrl && (
            <Image
              src={result.albumImageUrl}
              alt="backgroundImage"
              fill
              className="z-0 opacity-20 absolute object-cover"
              sizes="100vw"
              priority={false}
            />
          )}

          {/* Left column */}
          <div className="z-10 flex items-center">
            <FontAwesomeIcon
              icon={faSpotify}
              className="text-black text-5xl me-5 md:me-1 xl:me-8"
            />
            <p className="font-semibold me-5 md:me-1 xl:me-7">
              {isPlaying ? "Now playing" : "My playlist"}
            </p>
            {isPlaying && <PlayingAnimation />}
          </div>

          {/* Right column */}
          {isPlaying ? (
            <div className="z-10 rounded-lg ms-5">
              <div className="flex items-center space-x-4">
                <div className="overflow-hidden">
                  <a
                    href={result.songUrl ? encodeURI(result.songUrl) : "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="block font-semibold w-full truncate text-blue-500"
                  >
                    {result.title}
                  </a>
                  <p className="truncate text-gray-500">{result.artist}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="z-10 ms-5">
              <SpotifyEmbed />
              {/* opsional debug kecil saat dev */}
              {/* {error && <p className="text-xs text-gray-500 mt-2">Spotify API not configured.</p>} */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
