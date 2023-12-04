'use client'
import {useState, useEffect, useRef} from 'react'
import React from "react";


  const [fund, setFund] = useState(false)
  const OpenFund = () => setFund(!fund);
  const CloseFund = () => setFund(!fund);

const Project = () => {

  return (

           <div>
           {/*pop-up begins*/}

          <div className={fund ? 'px-5 py-3 fund-pop-up text-white slideInRight' : 'd-none'}>
             <div className='curp'>
               <img src='/images/previous.png' width='10%' onClick={CloseFund} />
               {/*<i className='bi-arrow-left-circle fa-4x text-white' onClick={CloseFund}></i>*/}
             </div>

             <div className='mt-5'>
               Fund Ether
             </div>

             <div className='w-100 bg-ether flex-v-new2'>
               <div>
                 <input placeholder='Enter the amount...' />
               </div>

               <div className='ml-5'>
                  <button>
                      TRANSFER
                  </button>
               </div>
             </div>

              <div className='mt-5'>
               Fund with Token
             </div>

            <div className='w-100 bg-ether flex-v-new2'>
               <div>
                 <select>
                   <option>Select Token</option>
                   <option>Select Token</option>
                   <option>Select Token</option>
                   <option>Select Token</option>
                 </select>
               </div>

               <div className='ml-5'>
                  <div className='tok fw600'>I</div>
               </div>

               <div className='ml-5'>
                  <button>
                      TRANSFER
                  </button>
               </div>
             </div>

             <div className='flex-h-new91 mt-5'>
                <div className='fos30'>
                    Thank You!!
                </div>

                <div className='ml-2'>
                  <img src='/images/thanks.png' width='40%' />
                </div>
             </div>

             <div className='mt-5 flex-h-new51 curp'>
               <img src='/images/right.png' width='20%' />
             </div>
          </div>

          {/*end of pop-up*/}

          <div className='fos35 text-white text-center'>
           Congratulations!!!
         </div>

          <div className='text-white mt-5 w-100 fos30 flex-h-new91'>
            <div className='fos30'>
              To start with you need to connect your wallet
            </div> 
            <button className='pri-button rounded ml-5'>Connect your wallet</button>
          </div>

          <div>
            <button className='pri-button rounded text-white mt-5' onClick={OpenFund}>Fund Function</button>
          </div>

          <div className='fos24 text-white mt-5'>
            Project Details
          </div>

          <div className='w-50 text-white fos12 mt-3'>
             Egestas sed sed risus pretium quam vulputate. Lacus laoreet non curabitur gravida arcu ac. Pharetra diam sit amet nisl suscipit adipiscing. Placerat orci nulla pellentesque dignissim enim sit. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Ultrices tincidunt arcu non sodales. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam.
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.
          </div>

         <div className='fos24 text-white mt-5'>
           Project Founders
         </div>

       <div className='mt-5 faq-cards'>
            <div>
              <div className='bg-founders'></div>
              <div className='flex-h-new9 mt-2'>
                <img src='/images/linkedin.png' width='15%' />
                <img src='/images/twitter.png' width='15%' className='ml-2' />
              </div>
            </div>

            <div>
              <div className='bg-founders'></div>
              <div className='flex-h-new9 mt-2'>
                <img src='/images/linkedin.png' width='15%' />
                <img src='/images/twitter.png' width='15%' className='ml-2' />
              </div>
            </div>

            <div>
              <div className='bg-founders'></div>
              <div className='flex-h-new9 mt-2'>
                <img src='/images/linkedin.png' width='15%' />
                <img src='/images/twitter.png' width='15%' className='ml-2' />
              </div>
            </div>
       </div>


       <div className='fos24 text-white mt-5'>
           About the team
        </div>

        <div className='header text-white mt-4'>
            <div>
              <img src='/images/image.png' width='60%' />
            </div>

            <div className='w-50'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Eleifend quam adipiscing vitae proin sagittis nisl rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex Eleifend quam adipiscing vitae proin sagittis nisl rhoncus.    
            </div>
        </div>

        <div className='text-center'>
            <button className='sec-button rounded-xl text-white mt-5'>Join the community forum</button>
        </div>
    </div>
)

export default Project
