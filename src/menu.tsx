import { useState } from "react";
import OutsideAlerter from "./hooks/useClickOutsideToClose";
import "./styles/menu.css";
import AccessibilityMenuSvg from "./assets/accessibilityMenu";
import LightModeSvg from "./assets/lightModesvg";
import DarkModeSvg from "./assets/darkModeSvg";

export default function Menu({
  setDarkMode,
  setMotion,
  motion,
  blackWhite,
  setBlackWhite,
}: {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  setMotion: React.Dispatch<React.SetStateAction<boolean>>;
  motion: boolean;
  blackWhite: boolean;
  setBlackWhite: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [active, setActive] = useState(false);
  const [accessibilityMenu, setAccessibilityMenu] = useState(false);

  const handleModeState = () => {
    setActive((prv) => !prv);
    setDarkMode((prv: boolean) => !prv);
  };

  const setState = (
    ts: React.ChangeEvent<HTMLInputElement>,
    setFn: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (ts.target.checked) {
      setFn(false);
    } else {
      setFn(true);
    }
  };

  return (
    <>
      <section id="menu">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 p-0">
              <div className="menu">
                <div className="menu-links">
                  <a href="#about" title="About Section">
                    About
                  </a>
                  <a href="#experience" title="Experience Section">
                    Experience
                  </a>
                  <a href="#skills" title="Skills Section">
                    Skills
                  </a>
                  <a href="#projects" title="Projects Section">
                    Projects
                  </a>
                </div>
                <div className="socials d-flex align-items-end justify-content-end">
                  <div className="position-relative accessibility-wrap">
                    <OutsideAlerter menuState={setAccessibilityMenu}>
                      <a
                        onClick={() =>
                          setAccessibilityMenu((prv: boolean) => !prv)
                        }
                        title="Accessibility Menu"
                      >
                        <AccessibilityMenuSvg />
                      </a>
                      {accessibilityMenu && (
                        <div className="accessibility-menu position-absolute">
                          <div className="d-flex flex-column justify-content-around align-items-center">
                            <div className="mb-3">
                              <label htmlFor="motion">
                                Disable website motion
                              </label>
                              <input
                                type="checkbox"
                                id="motion"
                                className="ms-3"
                                checked={motion ? false : true}
                                onChange={(e) => setState(e, setMotion)}
                              />
                            </div>
                            <div>
                              <label htmlFor="blackWhite">
                                Black and white mode
                              </label>
                              <input
                                type="checkbox"
                                id="blackWhite"
                                className="ms-3"
                                checked={blackWhite ? false : true}
                                onChange={(e) => setState(e, setBlackWhite)}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </OutsideAlerter>
                  </div>
                  <div id="mode-wrap">
                    <div id="dot" onClick={() => handleModeState()}>
                      {!active ? <LightModeSvg /> : <DarkModeSvg />}
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
