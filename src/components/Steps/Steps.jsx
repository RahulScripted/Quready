import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';

const Steps = () => {
  return (
    <div className='flex items-center justify-center flex-col gap-4 md:gap-8'>
        <h1 className='text-2xl md:text-5xl font-bold bg-gradient-to-b from-black to-gray-400 bg-clip-text text-transparent h-auto md:h-[55px]'>Steps to Conquer DSA</h1>
        
        <div className='w-full md:w-[60%]'>
            <VerticalTimeline lineColor='black'>
                <VerticalTimelineElement 
                    contentStyle={{ 
                        backgroundImage: 'linear-gradient(315deg, #e056fd 0%, #000000 74%)', 
                        color: '#fff',
                        padding: "5px 5px 20px",
                        boxShadow: "none",
                        textAlign: "center",
                        borderRight: '2px solid #fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height:'auto'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid #e056fd'}}
                    iconStyle = 
                    {{ 
                        backgroundImage: 'linear-gradient(227deg, #4d4855 0%, #000000 74%)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 'none',
                    }}
                    icon={<span className="text-2xl">1</span>}
                >
                    <p className='text-xl md:text-2xl'>Start Practicing DSA</p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement 
                    contentStyle={{ 
                        backgroundImage: 'linear-gradient(315deg, #e056fd 0%, #000000 74%)', 
                        color: '#fff',
                        padding: "5px 5px 20px",
                        boxShadow: "none",
                        textAlign: "center",
                        borderRight: '2px solid #fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height:'auto'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid #e056fd'}}
                    iconStyle = 
                    {{ 
                        backgroundImage: 'linear-gradient(227deg, #4d4855 0%, #000000 74%)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 'none',
                    }}
                    icon={<span className="text-2xl">2</span>}
                >
                    <p className='text-xl md:text-2xl'>Join Coding Platforms</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    contentStyle={{ 
                        backgroundImage: 'linear-gradient(315deg, #e056fd 0%, #000000 74%)', 
                        color: '#fff',
                        padding: "5px 5px 20px",
                        boxShadow: "none",
                        textAlign: "center",
                        borderRight: '2px solid #fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height:'auto'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid #e056fd'}}
                    iconStyle = 
                    {{ 
                        backgroundImage: 'linear-gradient(227deg, #4d4855 0%, #000000 74%)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 'none',
                    }}
                    icon={<span className="text-2xl">3</span>}
                >
                    <p className='text-xl md:text-2xl'>Engage in coding challenges</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    contentStyle={{ 
                        backgroundImage: 'linear-gradient(315deg, #e056fd 0%, #000000 74%)', 
                        color: '#fff',
                        padding: "5px 5px 20px",
                        boxShadow: "none",
                        textAlign: "center",
                        borderRight: '2px solid #fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height:'auto'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid #e056fd'}}
                    iconStyle = 
                    {{ 
                        backgroundImage: 'linear-gradient(227deg, #4d4855 0%, #000000 74%)', 
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 'none',
                    }}
                    icon={<span className="text-2xl">4</span>}
                >
                    <p className='text-xl md:text-2xl'>Implement DSA in project</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    </div>
  )
}

export default Steps