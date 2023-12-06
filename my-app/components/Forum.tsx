"use client";
import { useState, useEffect, useRef } from "react";
import React from "react";

const Forum = () => {
  return (
    <div className="container px-5">
      <div className="flex-h-new4">
        <div className="text-white flex-1 fos25 fw600">FORUM</div>

        <div className="flex-h-new5 flex-2">
          <div className="search-wrap mr-5">
            <input placeholder="Search..." />
            <div>
              <i className="bi-search mr-2"></i>
            </div>
          </div>

          <div>
            <img src="/images/notification.png" width="50%" />
          </div>

          <div>
            <img src="/images/profile-small.png" width="50%" />
          </div>
        </div>
      </div>

      <div className="flex-h-new9 mt-5">
        <div className="flex-1 bg-chat-side1">
          <div className="ml-3">
            <img src="/images/chat-side1.png" />
          </div>
          <div className="ml-3">
            <img src="/images/chat-side2.png" />
          </div>
          <div className="ml-3">
            <img src="/images/chat-side1.png" />
          </div>
          <div className="ml-3">
            <img src="/images/chat-side2.png" />
          </div>
          <div className="ml-3">
            <img src="/images/chat-side1.png" />
          </div>
          <div className="ml-3">
            <img src="/images/chat-side2.png" />
          </div>
          <div className="ml-3">
            <img src="/images/chat-side1.png" />
          </div>
          <div className="ml-3">
            <img src="/images/chat-side2.png" />
          </div>
          <div className="ml-3">
            <img src="/images/chat-side1.png" />
          </div>
          {/*<div className='ml-3'><img src='/images/chat-side2.png' /></div>*/}
          {/*<div className='ml-3'><img src='/images/chat-side1.png' /></div>*/}
          {/*<div className='ml-3'><img src='/images/chat-side2.png' /></div>*/}
        </div>

        <div className="flex-10 p-3">
          <div className="mt-5 text-white flex-h-new4">
            <div className="chat-head w-100 flex-h-new4">
              <div className="w-50 fos16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>

              <div className="flex-h-new9 chat-head-img-bg">
                <img src="/images/man.png" width="50%" />
              </div>
            </div>

            <div className="chat-body w-100">
              <div className="chat-box-1 text-dark">
                <div className="chat-box">
                  Ut enim ad minim veniam, quis nostrud exercitation
                </div>
              </div>

              <div className="chat-box-2 text-dark w-100">
                <div className="">
                  Ut enim ad minim veniam, quis nostrud exercitation
                </div>

                <div className="mt-3">
                  Ut enim ad minim veniam, quis nostrud exercitation
                </div>

                <div className="mt-3">
                  Ut enim ad minim veniam, quis nostrud exercitation
                </div>
              </div>

              <div className="chat-box-1 text-dark">
                <div className="chat-box">
                  Ut enim ad minim veniam, quis nostrud exercitation
                </div>
              </div>

              <div className="text-white mt-5 p-1 rounded-xl fos12 bg-pri3">
                Should we sanction the funds?
              </div>

              <div>
                <img src="/images/yes.png" width="12%" />
              </div>

              <div className="chat-box-3 text-dark w-100">
                <div className="flex-h-new5 w-100">
                  <div className="bg-pri4 text-center text-white mt-5 p-1 rounded-xl fos12">
                    Sanction
                  </div>

                  <div className="bg-pri4 text-center text-white mt-5 ml-1 p-1 rounded-xl fos12">
                    Deny
                  </div>
                </div>

                <div className="mt-3">
                  Ut enim ad minim veniam, quis nostrud exercitation
                </div>
              </div>

              <div className="send-message-wrap w-100 rounded-xl mt-5">
                <input placeholder="Message..." />
                <div className="flex-h-new5">
                  <img src="/images/love.png" width="20%" />
                  <i className="bi-search ml-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-chat-side1">
          <div className="ml-3">
            <img src="/images/chat-side1.png" />
          </div>
          <div className="ml-3">
            <img src="/images/chat-side2.png" />
          </div>
          <div className="ml-3">
            <img src="/images/chat-side1.png" />
          </div>
          <div className="ml-3">
            <img src="/images/chat-side2.png" />
          </div>
          <div className="ml-3">
            <img src="/images/chat-side1.png" />
          </div>
          <div className="ml-3">
            <img src="/images/chat-side2.png" />
          </div>
          <div className="ml-3">
            <img src="/images/chat-side1.png" />
          </div>
          <div className="ml-3">
            <img src="/images/chat-side2.png" />
          </div>
          <div className="ml-3">
            <img src="/images/chat-side1.png" />
          </div>
          {/*<div className='ml-3'><img src='/images/chat-side2.png' /></div>*/}
          {/*<div className='ml-3'><img src='/images/chat-side1.png' /></div>*/}
          {/*<div className='ml-3'><img src='/images/chat-side2.png' /></div>*/}
        </div>
      </div>
    </div>
  );
};

export default Forum;
