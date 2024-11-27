import { useState } from "react";

export default function Menu({ setDarkMode }: { setDarkMode: any }) {
  const [active, setActive] = useState(false);

  const handleModeState = () => {
    setActive((prv) => !prv);
    setDarkMode((prv: boolean) => !prv);
  };

  return (
    <>
      <section id="menu">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 p-0">
              <div className="menu">
                <div className="menu-links">
                  <a href="#about">About</a>
                  <a href="#experience">Experience</a>
                  <a href="#skills">Skills</a>
                  <a href="#projects">Projects</a>
                </div>
                <div className="socials d-flex align-items-end justify-content-end">
                  <a href="mailto:drivasgeorgios0@gmail.com">
                    <svg
                      className="gmail"
                      xmlns="http://www.w3.org/2000/svg"
                      width="800px"
                      height="800px"
                      viewBox="7.086 -169.483 1277.149 1277.149"
                      shape-rendering="geometricPrecision"
                      text-rendering="geometricPrecision"
                      image-rendering="optimizeQuality"
                    >
                      <path
                        fill="none"
                        d="M1138.734 931.095h.283M1139.017 931.095h-.283"
                      />
                      <path
                        d="M1179.439 7.087c57.543 0 104.627 47.083 104.627 104.626v30.331l-145.36 103.833-494.873 340.894L148.96 242.419v688.676h-37.247c-57.543 0-104.627-47.082-104.627-104.625V111.742C7.086 54.198 54.17 7.115 111.713 7.115l532.12 394.525L1179.41 7.115l.029-.028z"
                        fill="transparent"
                      />
                      <linearGradient
                        id="a"
                        gradientUnits="userSpaceOnUse"
                        x1="1959.712"
                        y1="737.107"
                        x2="26066.213"
                        y2="737.107"
                        gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                      >
                        <stop offset="0" stop-color="#f8f6ef" />
                        <stop offset="1" stop-color="#e7e4d6" />
                      </linearGradient>
                      <path
                        fill="url(#a)"
                        d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                      />
                      <path
                        fill="#e7e4d7"
                        d="M148.96 242.419v688.676h989.774V245.877L643.833 586.771z"
                      />
                      <path
                        fill="#b8b7ae"
                        d="M148.96 931.095l494.873-344.324-2.24-1.586L148.96 923.527z"
                      />
                      <path
                        fill="#b7b6ad"
                        d="M1138.734 245.877l.283 685.218-495.184-344.324z"
                      />
                      <path
                        d="M1284.066 142.044l.17 684.51c-2.494 76.082-35.461 103.238-145.219 104.514l-.283-685.219 145.36-103.833-.028.028z"
                        fill="transparent"
                      />
                      <linearGradient
                        id="b"
                        gradientUnits="userSpaceOnUse"
                        x1="1959.712"
                        y1="737.107"
                        x2="26066.213"
                        y2="737.107"
                        gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                      >
                        <stop offset="0" stop-color="#f8f6ef" />
                        <stop offset="1" stop-color="#e7e4d6" />
                      </linearGradient>
                      <path
                        fill="url(#b)"
                        d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                      />
                      <linearGradient
                        id="c"
                        gradientUnits="userSpaceOnUse"
                        x1="1959.712"
                        y1="737.107"
                        x2="26066.213"
                        y2="737.107"
                        gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                      >
                        <stop offset="0" stop-color="#f8f6ef" />
                        <stop offset="1" stop-color="#e7e4d6" />
                      </linearGradient>
                      <path
                        fill="url(#c)"
                        d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                      />
                      <linearGradient
                        id="d"
                        gradientUnits="userSpaceOnUse"
                        x1="1959.712"
                        y1="737.107"
                        x2="26066.213"
                        y2="737.107"
                        gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                      >
                        <stop offset="0" stop-color="#f8f6ef" />
                        <stop offset="1" stop-color="#e7e4d6" />
                      </linearGradient>
                      <path
                        fill="url(#d)"
                        d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                      />
                      <linearGradient
                        id="e"
                        gradientUnits="userSpaceOnUse"
                        x1="1959.712"
                        y1="737.107"
                        x2="26066.213"
                        y2="737.107"
                        gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                      >
                        <stop offset="0" stop-color="#f8f6ef" />
                        <stop offset="1" stop-color="#e7e4d6" />
                      </linearGradient>
                      <path
                        fill="url(#e)"
                        d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                      />
                      <linearGradient
                        id="f"
                        gradientUnits="userSpaceOnUse"
                        x1="1959.712"
                        y1="737.107"
                        x2="26066.213"
                        y2="737.107"
                        gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                      >
                        <stop offset="0" stop-color="#f8f6ef" />
                        <stop offset="1" stop-color="#e7e4d6" />
                      </linearGradient>
                      <path
                        fill="url(#f)"
                        d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                      />
                      <linearGradient
                        id="g"
                        gradientUnits="userSpaceOnUse"
                        x1="1959.712"
                        y1="737.107"
                        x2="26066.213"
                        y2="737.107"
                        gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                      >
                        <stop offset="0" stop-color="#f8f6ef" />
                        <stop offset="1" stop-color="#e7e4d6" />
                      </linearGradient>
                      <path
                        fill="url(#g)"
                        d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                      />
                      <linearGradient
                        id="h"
                        gradientUnits="userSpaceOnUse"
                        x1="1959.712"
                        y1="737.107"
                        x2="26066.213"
                        y2="737.107"
                        gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                      >
                        <stop offset="0" stop-color="#f8f6ef" />
                        <stop offset="1" stop-color="#e7e4d6" />
                      </linearGradient>
                      <path
                        fill="url(#h)"
                        d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                      />
                      <path
                        fill="#f7f5ed"
                        d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/drivasgeorgios/"
                    target="_blank"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>LinkedIn</title>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                  </a>
                  <a href="https://github.com/GeorgiosDrivas" target="_blank">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                    </svg>
                  </a>
                  <div id="mode-wrap">
                    <div id="dot" onClick={() => handleModeState()}>
                      {!active ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1722_6736)">
                            <path
                              d="M15 21.25C18.4518 21.25 21.25 18.4518 21.25 15C21.25 11.5482 18.4518 8.75 15 8.75C11.5482 8.75 8.75 11.5482 8.75 15C8.75 18.4518 11.5482 21.25 15 21.25Z"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M15 1.25V3.75"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M15 26.25V28.75"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M5.27344 5.27344L7.04844 7.04844"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M22.9492 22.9531L24.7242 24.7281"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M1.25 15H3.75"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M26.25 15H28.75"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M5.27344 24.7281L7.04844 22.9531"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M22.9492 7.04844L24.7242 5.27344"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_1722_6736">
                              <rect width="30" height="30" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                        >
                          <path
                            d="M22.0804 13.4495C21.915 15.2392 21.2433 16.9448 20.144 18.3667C19.0446 19.7886 17.563 20.868 15.8726 21.4785C14.1822 22.0891 12.3528 22.2057 10.5986 21.8145C8.84432 21.4234 7.23775 20.5407 5.96685 19.2698C4.69595 17.9989 3.81328 16.3923 3.42212 14.6381C3.03097 12.8838 3.14751 11.0545 3.7581 9.36404C4.3687 7.67361 5.44809 6.19203 6.86999 5.09267C8.29189 3.99331 9.99747 3.32164 11.7872 3.15625C10.7394 4.57382 10.2351 6.32039 10.3662 8.0783C10.4973 9.8362 11.255 11.4887 12.5015 12.7352C13.748 13.9816 15.4004 14.7393 17.1584 14.8704C18.9163 15.0015 20.6628 14.4973 22.0804 13.4495Z"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
