import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const TAbox = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [blurEffect, setBlurEffect] = useState(true); // Password starts blurred
  const [restartRoot, setRestartRoot] = useState(false); // Controls root restart

  useEffect(() => {
    const cycleProcess = () => {
      setRestartRoot(true); // Reset root animation
      setTimeout(() => setRestartRoot(false), 0); // Allow it to restart instantly

      setTimeout(() => {
        setShowPassword(true);
        setBlurEffect(false); // Remove password blur after 2.5s
      }, 2500);

      setTimeout(() => {
        setBlurEffect(true); // Add password blur after 7.5s
        setShowPassword(false); // Hide password text
      }, 7500);
    };

    cycleProcess(); // Start cycle immediately
    const interval = setInterval(cycleProcess, 15000); // Repeat every 15s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="c-space my-20 flex justify-center">
      <motion.div
        className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 rounded-xl shadow-2xl w-95 border border-green-400 overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Cyber Glow Animation */}
        <motion.div
          className="absolute inset-0 border-2 border-green-400 rounded-xl animate-border-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />

        {/* Vault-Like Inner Box (Always Visible) */}
        <div className="relative border border-green-300 rounded-lg p-4 bg-opacity-20 bg-gray-800 text-gray-100 text-center flex items-center justify-center">
          {/* Password Text (Blurs/Unblurs in 15s Cycle) */}
          <motion.span
            className={`transition-all text-xl font-mono tracking-widest text-green-300 ${
              blurEffect ? "blur-sm opacity-100" : "blur-none opacity-100"
            }`}
            transition={{ duration: 0.5 }}
          >
            qL+8Z0LSu!
          </motion.span>

          {/* Security Shield Icon */}
          <motion.div
            className="absolute bg-gray-900 p-3 rounded-full border border-green-400 shadow-lg top-1/2 transform -translate-y-1/2 right-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <span className="text-green-300">🔒</span>
          </motion.div>
        </div>

        {/* Hacking Terminal Effect (Root is always visible, no blur) */}
        <motion.div
          className="mt-4 p-2 bg-black text-green-300 text-center font-mono text-sm border border-green-400 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>root@system:~$ <span className="text-green-500">initiate_hack()</span></p>

          {/* Loading Bar (Resets on Each Cycle) */}
          {!restartRoot && (
            <motion.div
              className="w-full h-2 bg-green-600 mt-2"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
            />
          )}

          {/* Show "Access Granted" only after loading is done */}
          {showPassword ? (
            <motion.p
              className="mt-2 text-green-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              ACCESS GRANTED... 🔓
            </motion.p>
          ) : (
            <p className="mt-2 text-green-400" style={{ visibility: "hidden" }}>
              ACCESS GRANTED... 🔓
            </p>
          )}
        </motion.div>

        {/* Cybersecurity Label */}
        <p className="mt-4 text-green-300 text-center font-semibold">Attacking ...</p>
      </motion.div>

      <style>
        {`
          @keyframes border-glow {
            0% { box-shadow: 0 0 10px rgba(0, 255, 0, 0.5); }
            50% { box-shadow: 0 0 20px rgb(0, 255, 0); }
            100% { box-shadow: 0 0 10px rgba(0, 255, 0, 0.5); }
          }
          .animate-border-glow {
            animation: border-glow 2s infinite alternate;
          }
        `}
      </style>
    </section>
  );
}

export default TAbox;
