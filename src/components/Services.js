import React from 'react';
import img from '../images/web.svg';
import img2 from '../images/app.svg';
import traing from '../images/traing.png';
import Iso from '../images/Iso.webp';
import img4 from '../images/consultation.svg';
import management from '../images/management.png';
import webMobile from '../images/webMobile.webp';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">services</h2>

                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">We are deeply committed to the growth and success of our clients.</h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={management} />
                                <h2 className="font-semibold my-4 text-2xl text-center "> Management consultant </h2>
                                <p className="text-md font-medium">
                                    we are known for Strategic planning, cost reduction thorough Productivity improvement. We have helped Chemical, Pharmaceutical, Plastics Engineering companies to improve their profit by implementing Strategic planing, lean practice and Other productivity improvement tools.
                                </p>
                            </div>
                        </div>


                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={Iso} />
                                <h2 className="font-semibold my-4 text-2xl text-center ">ISO Consultant</h2>
                                <p className="text-md font-medium">
                                    In today's business world, iso certification is an important aspect of demonstrating your organization's commitment to quality and customer satisfaction. However, achieving iso certification can be a complex and time-consuming process that requires a great deal of planning and preparation. That's where an iso consultant comes in.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={webMobile} />
                                <h2 className="font-semibold my-4 text-2xl text-center">Web/Mobile Development</h2>
                                <p className="text-md font-medium">
                                    We specialize in creating and optimizing high-quality, custom websites and mobile applications for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use websites and applications for clients.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={traing} />
                                <h2 className="font-semibold my-4 text-2xl text-center">Training Program</h2>
                                <p className="text-md font-medium">
                                    We provide comprehensive corporate training solutions to businesses of all sizes. Our expert trainers have years of experience in corporate training and development and can help your employees stay up-to-date with the latest skills and best practices in your industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           
        </div>
    )
}

export default Services;