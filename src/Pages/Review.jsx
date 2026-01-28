import React from 'react';
import Marquee from 'react-fast-marquee';
import { IoIosStar } from 'react-icons/io';
import girl1 from "/images/girl1.avif"
import girl2 from "/images/girl2.avif"
import girl3 from "/images/girl3.avif"
import boy1 from "/images/boy1.avif"
import boy2 from "/images/boy2.avif"

const Review = () => {
    return (
      <div>
        <h1 className="text-5xl text-center p-5 mt-10 mb-10 font-bold">
          What people <span className="text-red-400">Think About Us</span>{" "}
        </h1>
        <Marquee autoFill={true} pauseOnHover={true} speed={65}>
          {/* card  */}
          <div className="flex gap-10 pr-10">
            <div className="w-64 h-80  lg:w-96 lg:h-64 bg-white/70 p-5 rounded-xl space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <IoIosStar color="yellow" />
                  <IoIosStar color="yellow" />
                  <IoIosStar color="yellow" />
                  <IoIosStar color="yellow" />
                  <IoIosStar color="yellow" />
                </div>
                <div>
                  <h4 className="text-black">10th Jan, 2026 </h4>
                </div>
              </div>
              <div>
                <h4 className="text-black">
                  Next_Step has made my entire job search process extremely
                  smooth and stress-free. The interface is clean, easy to
                  navigate, and the job recommendations actually matched my
                  skills and experience.
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src={girl1}
                    className="w-15 h-15 rounded-full object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">
                    Herina Watson
                  </h3>
                  <h4 className="text-xm text-black">CTO McNica</h4>
                </div>
              </div>
            </div>
            <div className="w-64 h-80 lg:w-96 lg:h-64 bg-white/70 p-5 rounded-xl space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <IoIosStar color="yellow" />
                  <IoIosStar color="yellow" />
                  <IoIosStar color="yellow" />
                  <IoIosStar color="yellow" />
                  <IoIosStar color="yellow" />
                </div>
                <div>
                  <h4 className="text-black">27th Jan, 2026 </h4>
                </div>
              </div>
              <div>
                <h4 className="text-black">
                  I was struggling to find relevant job opportunities until I
                  started using this website. The application process is simple,
                  and I really liked how easy it was.
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src={girl2}
                    className="w-15 h-15 rounded-full object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">
                    Radhika Debnath
                  </h3>
                  <h4 className="text-xm text-black">COO Analytica</h4>
                </div>
              </div>
            </div>
            <div className="w-64 h-80 lg:w-96 lg:h-64 bg-white/70 p-5 rounded-xl space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <IoIosStar color="yellow" />
                  <IoIosStar color="yellow" />
                  <IoIosStar color="yellow" />
                  <IoIosStar color="yellow" />
                  <IoIosStar color="yellow" />
                </div>
                <div>
                  <h4 className="text-black">15th Dec, 2025 </h4>
                </div>
              </div>
              <div>
                <h4 className="text-black">
                  What impressed me the most about this job portal is how
                  professional and reliable it feels. The job listings are
                  genuine, well-organized, and updated regularly.
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src={boy1}
                    className="w-15 h-15 rounded-full object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">
                    Rojar Rakinson
                  </h3>
                  <h4 className="text-xm text-black">CEO Tinofarm</h4>
                </div>
              </div>
            </div>
            <div className="w-64 h-80 lg:w-96 lg:h-64 bg-white/70 p-5 rounded-xl space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <IoIosStar color="yellow" />
                  <IoIosStar color="yellow" />
                  <IoIosStar color="yellow" />
                  <IoIosStar color="yellow" />
                  <IoIosStar color="yellow" />
                </div>
                <div>
                  <h4 className="text-black">18th Jan, 2026 </h4>
                </div>
              </div>
              <div>
                <h4 className="text-black">
                  As a recent graduate, finding the right job was overwhelming
                  at first. This platform guided me through the process with
                  relevant job suggestions and an easy application system.
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src={boy2}
                    className="w-15 h-15 rounded-full object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">Nilson Hardy</h3>
                  <h4 className="text-xm text-black">CFO Rozania</h4>
                </div>
              </div>
            </div>
            <div className="w-64 h-80 lg:w-96 lg:h-64 bg-white/70 p-5 rounded-xl space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <IoIosStar color="yellow" />
                  <IoIosStar color="yellow" />
                  <IoIosStar color="yellow" />
                  <IoIosStar color="yellow" />
                  <IoIosStar color="yellow" />
                </div>
                <div>
                  <h4 className="text-black">20th Jan, 2026 </h4>
                </div>
              </div>
              <div>
                <h4 className="text-black">
                  This website gave me confidence during my job search journey.
                  From creating my profile to applying for jobs, everything was
                  straight and forward and user-friendly.
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src={girl3}
                    className="w-15 h-15 rounded-full object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">
                    Herina Watson
                  </h3>
                  <h4 className="text-xm text-black">CTO McNica</h4>
                </div>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    );
};

export default Review;