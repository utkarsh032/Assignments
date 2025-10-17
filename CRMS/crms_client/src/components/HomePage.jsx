import React, { useState } from 'react'
import {
  FaUserFriends,
  FaGift,
  FaChartLine,
  FaTrophy,
  FaStar,
  FaArrowRight,
  FaCheckCircle,
  FaHandshake,
  FaRocket,
  FaCoins
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function HomePage () {
  const [hoveredCard, setHoveredCard] = useState(null)

  const benefits = [
    {
      icon: <FaGift className='w-8 h-8' />,
      title: 'Earn Rewards',
      description: 'Get amazing bonuses for every successful referral you make',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <FaUserFriends className='w-8 h-8' />,
      title: 'Build Network',
      description: 'Help your friends discover great career opportunities',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaChartLine className='w-8 h-8' />,
      title: 'Track Progress',
      description: 'Monitor all your referrals and earnings in real-time',
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  const stats = [
    { icon: <FaUserFriends />, value: '500+', label: 'Referrals Made' },
    { icon: <FaTrophy />, value: '250+', label: 'Successful Hires' },
    { icon: <FaCoins />, value: '₹10L+', label: 'Rewards Paid' }
  ]

  const steps = [
    {
      icon: <FaUserFriends />,
      title: 'Refer a Friend',
      description:
        'Share job opportunities with talented people in your network'
    },
    {
      icon: <FaHandshake />,
      title: 'They Get Hired',
      description:
        'We review candidates and connect them with the right positions'
    },
    {
      icon: <FaGift />,
      title: 'You Earn Rewards',
      description: 'Receive exciting bonuses when your referral joins the team'
    }
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50'>
      {/* Animated Background Blobs */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 left-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse'></div>
        <div
          className='absolute top-40 right-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse'
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className='absolute bottom-20 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse'
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Hero Section */}
        <div className='bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border border-white/20'>
          <div className='flex flex-col lg:flex-row items-center gap-12'>
            {/* Left Side - Illustration */}
            <div className='w-full lg:w-1/2 relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-2xl opacity-20'></div>
              <div className='relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-12'>
                <div className='flex items-center justify-center relative'>
                  {/* Central Icon */}
                  <div className='relative'>
                    <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse'></div>
                    <div className='relative bg-white rounded-full p-8 shadow-2xl'>
                      <FaUserFriends
                        className='w-24 h-24 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'
                        style={{
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      />
                    </div>
                  </div>

                  {/* Orbiting Icons */}
                  <div className='absolute w-full h-full'>
                    <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8'>
                      <div
                        className='bg-yellow-400 rounded-full p-3 shadow-lg animate-bounce'
                        style={{ animationDuration: '2s' }}
                      >
                        <FaStar className='w-6 h-6 text-white' />
                      </div>
                    </div>
                    <div className='absolute top-1/2 right-0 translate-x-8 -translate-y-1/2'>
                      <div
                        className='bg-green-400 rounded-full p-3 shadow-lg animate-bounce'
                        style={{
                          animationDuration: '2.5s',
                          animationDelay: '0.5s'
                        }}
                      >
                        <FaGift className='w-6 h-6 text-white' />
                      </div>
                    </div>
                    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8'>
                      <div
                        className='bg-pink-400 rounded-full p-3 shadow-lg animate-bounce'
                        style={{
                          animationDuration: '2.2s',
                          animationDelay: '1s'
                        }}
                      >
                        <FaTrophy className='w-6 h-6 text-white' />
                      </div>
                    </div>
                    <div className='absolute top-1/2 left-0 -translate-x-8 -translate-y-1/2'>
                      <div
                        className='bg-blue-400 rounded-full p-3 shadow-lg animate-bounce'
                        style={{
                          animationDuration: '2.8s',
                          animationDelay: '1.5s'
                        }}
                      >
                        <FaRocket className='w-6 h-6 text-white' />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mt-8 text-center'>
                  <div className='inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2 rounded-full shadow-md'>
                    <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
                    <span className='text-sm font-semibold text-gray-700'>
                      Active Referral Program
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className='w-full lg:w-1/2 flex flex-col items-start gap-6'>
              <div className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg'>
                <FaStar className='w-4 h-4' />
                <span className='text-sm font-bold'>Refer & Earn</span>
              </div>

              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight'>
                Refer a Friend &
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2'>
                  Unlock Amazing Rewards!
                </span>
              </h1>

              <p className='text-gray-600 text-lg leading-relaxed'>
                Join our referral program and help us discover amazing talent.
                Share opportunities with your network and earn exciting rewards
                for every successful hire.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 mt-4'>
                <Link
                  to='/referral-form'
                  className='group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2'
                >
                  Submit a Referral
                  <FaArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
                </Link>

                <button className='group bg-white hover:bg-gray-50 text-gray-700 font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 border-2 border-gray-200'>
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className='grid grid-cols-3 gap-6 mt-6 w-full'>
                {stats.map((stat, index) => (
                  <div key={index} className='text-center'>
                    <div className='flex items-center justify-center mb-2 text-blue-600'>
                      {React.cloneElement(stat.icon, { className: 'w-6 h-6' })}
                    </div>
                    <div className='text-2xl font-bold text-gray-900'>
                      {stat.value}
                    </div>
                    <div className='text-xs text-gray-600 mt-1'>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className='mb-12'>
          <div className='text-center mb-10'>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
              Why Refer with Us?
            </h2>
            <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
              Join hundreds of satisfied referrers who are earning rewards while
              helping their friends
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-white/20 ${
                  hoveredCard === index ? 'ring-2 ring-purple-400' : ''
                }`}
              >
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${
                    benefit.color
                  } text-white mb-6 shadow-lg transform transition-transform duration-300 ${
                    hoveredCard === index ? 'scale-110 rotate-6' : ''
                  }`}
                >
                  {benefit.icon}
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  {benefit.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className='bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-white/20'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
              How It Works
            </h2>
            <p className='text-gray-600 text-lg'>
              Three simple steps to start earning rewards
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {steps.map((step, index) => (
              <div key={index} className='relative'>
                <div className='flex flex-col items-center text-center'>
                  <div className='relative mb-6'>
                    <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30'></div>
                    <div className='relative bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-xl'>
                      {React.cloneElement(step.icon, {
                        className: 'w-10 h-10'
                      })}
                    </div>
                    <div className='absolute -bottom-2 -right-2 bg-yellow-400 text-gray-900 font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm shadow-lg'>
                      {index + 1}
                    </div>
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    {step.title}
                  </h3>
                  <p className='text-gray-600'>{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className='hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 -translate-x-1/2'></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className='relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden'>
          <div className='absolute inset-0 bg-black/10'></div>
          <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl'></div>
          <div className='absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl'></div>

          <div className='relative text-center'>
            <div className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6'>
              <FaCheckCircle className='w-5 h-5' />
              <span className='font-semibold'>Join 500+ Active Referrers</span>
            </div>

            <h2 className='text-3xl sm:text-4xl font-bold mb-4'>
              Ready to Make an Impact?
            </h2>
            <p className='text-blue-100 text-lg mb-8 max-w-2xl mx-auto'>
              Start referring today and be part of something amazing. Help your
              friends find great opportunities while earning exciting rewards!
            </p>

            <Link
              to='/referral-form'
              className='group inline-flex items-center gap-3 bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl'
            >
              Get Started Now
              <FaArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
