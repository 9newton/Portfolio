import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

function ScollToTop() {
    const [ScollToTop, setScollToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1000) {
                setScollToTop(true);
            } else {
                setScollToTop(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="back-to-top">
            {ScollToTop && (
                <button className="btn-to-top" onClick={scrollUp}>
                    <FaAngleUp />
                </button>
            )}
        </div>
    );
}

export default ScollToTop;