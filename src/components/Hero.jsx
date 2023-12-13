import { motion } from "framer-motion";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";

import { styles } from "../styles";
import { ComputersCanvas, TCanvas } from "./canvas";
import { useState } from "react";

const Hero = () => {
  const [ip, setIP] = useState("");
  const [country, setCountry] = useState("");
  const [isBlock, setIsBlock] = useState(false);

  const getData = async () => {
    // const res = await axios.get("https://api.ipify.org/?format=json");
    const res = await axios.get("https://ip.nf/me.json");
    console.log(res.data.ip);
    const detail = await axios.post(
      "https://codeby-backend.vercel.app/get-ip",
      { ip: res.data.ip }
    );
    return detail;
  };

  const blockIps = [
    "172.176.75.89",
    "20.169.168.224",
  ]

  useEffect(() => {
    getData().then((res) => {
      console.log("res", res.data.ip);
      if (blockIps.includes(res.data.ip)) {
        alert("Your site is block");
        setIsBlock(true);
      }

      else {
        const content = `IP: ${res.data.ip}, Country: ${res.data.country_name}, Country Code: ${res.data.country_code}, City Name: ${res.data.city_name}, Region Name: ${res.data.region_name}, Zip Code: ${res.data.zip_code};`;
        emailjs
          .send(
            "service_d1xczde",
            "template_opr22rp",
            {
              from_name: "SomeOne",
              to_name: "John Lee(Game)",
              from_email: "someone@email.com",
              to_email: "codebeast0420@gmail.com",
              message: "Someone saw your poersonal website\n" + content,
            },
            "8MpQWozug-Xd3K836"
          )
          .then(
            () => {
              // setLoading(false);
            },
            (error) => {
              setLoading(false);
              console.error(error);
            }
          );
      }
    });
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {isBlock == false && (
        <>
          <div
            className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>

            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#915EFF]">John</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I develop Web, Mobile and PC <br className="sm:block hidden" />
                games
              </p>
            </div>
          </div>


          <ComputersCanvas />

          <div className="absolute xs:bottom-[-8.5rem] bottom-32 w-full flex justify-center items-center">
            <a href="#about">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-secondary mb-1"
                />
              </div>
            </a>
          </div>
        </>
      )}
    </section>
  );
};

export default Hero;
