import React, { useState, useRef } from "react";
import styled from "styled-components";
import YouTube from "react-youtube";

const Wrapper = styled.div`
  padding-top: 56.25%;
  height: 0;
  min-height: 0;
  transition: opacity 0s initial 0.5s;
  position: relative;
`;

const Content = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Overlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Button = styled.div`
  top: calc(50% - 45px);
  left: calc(50% - 45px);
  width: 90px;
  height: 90px;
  background-color: #248de0;
  border-radius: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
`;

const Icon = styled.span`
  margin: 0px -6px 0px 0px;
  font-size: 28px;
  color: #ffffff;
  display: flex;
`;

const YouTubePlayer = ({ videoId = "Rzgdz1mbLbE" }) => {
  const [isReady, setReady] = useState(false);
  const [isPlay, setPlay] = useState(false);

  const playerRef = useRef(null);

  const playVideo = () => {
    setPlay(true);
    playerRef.current.internalPlayer.playVideo();
  };

  const onReady = ({ target }) => {
    const checkIframe = (value) =>
      value instanceof HTMLElement && value.tagName === "IFRAME";
    const iframe = Object.values(target).find((value) => checkIframe(value));

    if (!iframe) return;

    iframe.style.position = "absolute";
    setReady(true);
  };

  return (
    <Wrapper style={{ opacity: isReady ? "1" : "0" }}>
      <Content>
        <YouTube
          ref={playerRef}
          videoId={videoId}
          opts={{
            width: "100%",
            height: "100%",
            playerVars: {
              autoplay: 0,
            },
          }}
          onReady={onReady}
        />
      </Content>
      <Overlay
        style={{ display: isPlay ? "none" : "flex" }}
        onClick={playVideo}
      >
        <Button>
          <Icon>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              class="icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
            </svg>
          </Icon>
        </Button>
      </Overlay>
    </Wrapper>
  );
};

export default YouTubePlayer;
