import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaLock, FaEnvelope, FaGlobe, FaPhone } from "react-icons/fa";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="h-fit flex">
      <div className="w-1/2 relative hidden md:flex">
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="login-bg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
              }}
            >
              <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
                <h1 className="text-white text-3xl md:text-4xl font-bold text-center px-4  w-[90%]">
                  Travel is the only thing you buy that makes you richer
                </h1>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="register-bg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1505761671935-60b3a7427bad')",
              }}
            >
              <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
                <h1 className="text-white text-3xl md:text-4xl font-bold text-center px-4">
                  Every journey begins with a single step - join us today
                </h1>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 select-none space-x-4 text-white/90 md:bottom-8 ">
          <IconFacebook className="inline h-6 w-6 drop-shadow" />
          <IconTwitter className="inline h-6 w-6 drop-shadow" />
          <IconInstagram className="inline h-6 w-6 drop-shadow" />
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-blue-900 flex flex-col justify-center px-10 md:px-20 text-white overflow-hidden">
        <div className="my-10 flex w-full max-w-sm items-center justify-center mx-auto">
          <div className="relative w-full text-center">
            <div className="absolute -left-6 top-1/2 hidden h-[2px] w-10 -translate-y-1/2 bg-white/60 md:block" />
            <h1 className="text-2xl font-semibold tracking-wider">
              TRAVEL WEBSITE NAME
            </h1>
            <div className="absolute -right-6 top-1/2 hidden h-[2px] w-10 -translate-y-1/2 bg-white/60 md:block" />
          </div>
        </div>

        <div className="mb-3 flex items-center space-x-5 mx-auto">
          <button className="grid h-11 w-11 place-items-center rounded-full bg-white/10 backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60">
            <IconFacebook className="h-5 w-5" />
          </button>
          <button className="grid h-11 w-11 place-items-center rounded-full bg-white/10 backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60">
            <IconGoogle className="h-5 w-5" />
          </button>
          <button className="grid h-11 w-11 place-items-center rounded-full bg-white/10 backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60">
            <IconLinkedIn className="h-5 w-5" />
          </button>
        </div>
        <p className="mb-8 text-sm text-white/80 mx-auto">
          or use your email account
        </p>

        <div className="flex gap-6 mb-8">
          <button
            onClick={() => setIsLogin(true)}
            className={`pb-2 ${
              isLogin ? "border-b-2 border-white" : "text-gray-400"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`pb-2 ${
              !isLogin ? "border-b-2 border-white" : "text-gray-400"
            }`}
          >
            Register
          </button>
        </div>

        <div className="relative min-h-[420px]">
          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.form
                key="login"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-4 absolute w-full"
              >
                <div className="flex items-center border-b border-gray-400 ">
                  <FaEnvelope className="mr-2" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-transparent w-full py-2 outline-none"
                  />
                </div>
                <div className="flex items-center border-b border-gray-400">
                  <FaLock className="mr-2" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="bg-transparent w-full py-2 outline-none"
                  />
                </div>
                <a
                  href="#"
                  className="text-sm text-right text-gray-300 hover:text-white"
                >
                  Forgot Your Password?
                </a>
                <button className="bg-white text-blue-900 font-bold py-2 rounded-full mt-4 hover:bg-gray-200 transition">
                  ENTER
                </button>
              </motion.form>
            ) : (
              <motion.form
                key="register"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-4 absolute w-full"
              >
                <div className="flex items-center border-b border-gray-400 ">
                  <FaUser className="mr-2" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="bg-transparent w-full py-2 outline-none"
                  />
                </div>
                <div className="flex items-center border-b border-gray-400">
                  <FaEnvelope className="mr-2" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-transparent w-full py-2 outline-none"
                  />
                </div>
                <div className="flex items-center border-b border-gray-400">
                  <FaPhone className="mr-2" />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="bg-transparent w-full py-2 outline-none"
                  />
                </div>
                <div className="flex items-center border-b border-gray-400">
                  <FaGlobe className="mr-2" />
                  <input
                    type="text"
                    placeholder="Country / City"
                    className="bg-transparent w-full py-2 outline-none"
                  />
                </div>
                <div className="flex items-center border-b border-gray-400">
                  <FaLock className="mr-2" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="bg-transparent w-full py-2 outline-none"
                  />
                </div>
                <div className="flex items-center border-b border-gray-400">
                  <FaLock className="mr-2" />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="bg-transparent w-full py-2 outline-none"
                  />
                </div>
                <button className="bg-white text-blue-900 font-bold py-2 rounded-full mt-4 hover:bg-gray-200 transition mb-28">
                  REGISTER
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

function IconFacebook(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12.06C22 6.49 17.52 2 12 2S2 6.49 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.9h-2.32V22c4.78-.75 8.44-4.92 8.44-9.94z" />
    </svg>
  );
}
function IconGoogle(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.35 11.1h-9.17v2.98h5.26c-.23 1.48-1.6 4.34-5.26 4.34-3.17 0-5.76-2.62-5.76-5.85s2.59-5.85 5.76-5.85c1.8 0 3 .76 3.69 1.41l2.51-2.43C16.82 4.4 14.83 3.5 12.18 3.5 6.98 3.5 2.77 7.7 2.77 12.9s4.21 9.4 9.41 9.4c5.44 0 9.03-3.82 9.03-9.2 0-.62-.07-1.08-.16-1.99z" />
    </svg>
  );
}
function IconLinkedIn(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9.5h3.41v1.49h.05c.48-.9 1.66-1.84 3.41-1.84 3.65 0 4.33 2.4 4.33 5.52v5.78zM5.34 8.01a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.11 20.45H3.56V9.5h3.55v10.95z" />
    </svg>
  );
}
function IconTwitter(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 5.92c-.73.33-1.5.54-2.31.64a4.03 4.03 0 001.77-2.22 8.06 8.06 0 01-2.56.98 4.01 4.01 0 00-6.84 3.65 11.39 11.39 0 01-8.27-4.2 4 4 0 001.24 5.35c-.64-.02-1.24-.2-1.77-.49v.05a4.01 4.01 0 003.22 3.93 4.03 4.03 0 01-1.05.14c-.26 0-.52-.02-.76-.07a4.01 4.01 0 003.75 2.78A8.04 8.04 0 012 18.58 11.35 11.35 0 008.15 20c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.35 8.35 0 0022 5.92z" />
    </svg>
  );
}
function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 19.5 5.5 5.5 0 0112 7.5zm0 2a3.5 3.5 0 103.5 3.5A3.5 3.5 0 0012 9.5zm5.75-2.25a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z" />
    </svg>
  );
}
