import React from "react";

const SectionTwo = () => {
  return (
    <div>
      <div className="layout1">
        <div class="border border-zinc-400 w-full"></div>

        <div class="flex  text-zinc-400 w-full">
          <div class="w-full">
            <div class="flex justify-between items-center pl-20 pr-12 py-8 gap-8 border-b-2 border-neutral-700 w-full">
              <p class="text-white text-2xl font w-full">Arslan Khan</p>
              <p class="text-white text-2xl font text-left w-full">
                Co-Founder | System’s Architect
              </p>
              <p class="text-white text-2xl font w-full">
                One liner, can be anything you like
              </p>
            </div>
            <div class="flex justify-between items-center pl-20 pr-12 py-8 gap-8 border-b-2 border-neutral-700 w-full">
              <p class="text-zinc-400 text-2xl font w-full">Saad Shah</p>
              <p class="text-2xl font text-left w-full">
                Co-Founder | Creative Director
              </p>
              <p class="text-2xl font w-full">Whaaaat.....</p>
            </div>
            <div class="flex justify-between items-center pl-20 pr-12 py-8  gap-8 border-b-2 border-neutral-700 w-full">
              <p class="text-zinc-400 text-2xl font w-full">Jamal Khan</p>
              <p class="text-2xl font text-left w-full">Supreme Leader</p>
              <p class="text-2xl font w-full">Let me think about it.</p>
            </div>
            <div class="flex justify-between items-center pl-20 pr-12 py-8 gap-8 border-b-2 border-neutral-700 w-full">
              <p class="text-zinc-400 text-2xl font w-full">Abdul Basit</p>
              <p class="text-2xl font text-left w-full">
                Chief Technology Officer
              </p>
              <p class="text-2xl font w-full">
                One liner, can be anything you like
              </p>
            </div>
            <div class="flex justify-between items-center pl-20 pr-12 py-8 gap-8 border-b-2 border-neutral-700 w-full">
              <p class="text-zinc-400 text-2xl font w-full">Rafay Syed</p>
              <p class="text-2xl font text-left w-full">
                Lead - Product Design & Business
              </p>
              <p class="text-2xl font w-full">
                One liner, can be anything you like
              </p>
            </div>
            <div class="flex justify-between items-center pl-20 pr-12 py-8 gap-8 border-b-2 border-neutral-700 w-full">
              <p class="text-zinc-400 text-2xl font w-1/2">Maheen Malik</p>
              <p class="text-2xl font text-left w-1/2">
                Lead - WordPress Development
              </p>
              <p class="text-2xl font w-1/2">
                One liner, can be anything you like
              </p>
            </div>
            <div class="flex justify-between items-center mb-20 pl-20 pr-12 py-8 gap-8 border-b-2 border-neutral-700 w-full">
              <p class="text-zinc-400 text-2xl font w-1/2">Haris Hashmi</p>
              <p class="text-2xl font text-left w-1/2">Head of Finance</p>
              <p class="text-2xl font w-1/2">
                One liner, can be anything you like
              </p>
            </div>
          </div>
          <div class="flex flex-col w-1/3 pb-6">
            <div class="img1 h-full">
              <img src="Assets/arsalan.png" alt="" />
            </div>
            <div class="description--people pt-12">
              <p>
                Great things happen when great people come together. Why stop
                there? Why not go the extra mile? We believe in nurturing
                meaningful relationships.
              </p>
            </div>
            <div class="social pt-6">
              <p>Twitter - Instagram - Dribbble - LinkedIn</p>
            </div>
          </div>
        </div>
      </div>

      {/* for tablet layout */}

      <div className="layout">
        <div className="flex flex-col border-b border-zinc-700 w-full">
          <div class="flex justify-between items-center pl-4 pr-4 sm:pl-6 sm:pr-6 py-6 gap-8 w-full">
            <p class="text-white text-base sm:text-2xl font">Arslan Khan</p>
            <p class="text-white text-base sm:text-2xl font text-left">
              Co-Founder | System’s Architect
            </p>
          </div>
          <div className="flex justify-center w-full">
            <div className="border-b-2 border-neutral-700 w-10/12 sm:w-full"></div>
          </div>
          <div className="flex flex-col sm:flex-row mx-4 sm:mx-6 my-6 sm:my-0">
            <div class="img1 h-full ">
              <img src="Assets/arsalan.png" alt="" />
            </div>
            <div className="flex flex-col sm:pl-4 border-b border-zinc-700 w-full">
              <div class="description--people pt-12">
                <p class="text-white mb-3 sm:mb-4 text-2xl font">
                  One liner, can be anything you like
                </p>
                <p className="text-base font-medium px-0">
                  Great things happen when great people come together. Why stop
                  there? Why not go the extra mile? We believe in nurturing
                  meaningful relationships.
                </p>
              </div>
              <div class="font font-normal text-white text-lg capitalize sm:uppercase pt-6 pb-4">
                <p>Twitter - Instagram - Dribbble - LinkedIn</p>
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center mb-20 pl-4 pr-4 sm:pl-6 sm:pr-6 py-8 border-b-2 border-neutral-700 w-full">
            <p class="text-zinc-400 text-base sm:text-2xl font">Saad Shah</p>
            <p class="text-zinc-400 text-base sm:text-2xl font text-left">
              Co-Founder | Creative Director
            </p>
          </div>
          <div class="flex justify-between items-center mb-20 pl-4 pr-4 sm:pl-6 sm:pr-6 py-8 border-b-2 border-neutral-700 w-full">
            <p class="text-zinc-400 text-base sm:text-2xl font">Jamal Khan</p>
            <p class="text-zinc-400 text-base sm:text-2xl font text-left">
              Supreme Leader
            </p>
          </div>
          <div class="flex justify-between items-center mb-20 pl-4 pr-4 sm:pl-6 sm:pr-6 py-8 border-b-2 border-neutral-700 w-full">
            <p class="text-zinc-400 text-base sm:text-2xl font">Abdul Basit</p>
            <p class="text-zinc-400 text-base sm:text-2xl font text-left">
              Chief Technology Officer
            </p>
          </div>
          <div class="flex justify-between items-center mb-20 pl-4 pr-4 sm:pl-6 sm:pr-6 py-8 border-b-2 border-neutral-700 w-full">
            <p class="text-zinc-400 text-base sm:text-2xl font">Rafay Syed</p>
            <p class="text-zinc-400 text-base sm:text-2xl font text-left">
              Lead - Product Design & Business
            </p>
          </div>
          <div class="flex justify-between items-center mb-20 pl-4 pr-4 sm:pl-6 sm:pr-6 py-8 border-b-2 border-neutral-700 w-full">
            <p class="text-zinc-400 text-base sm:text-2xl font">Maheen Malik</p>
            <p class="text-zinc-400 text-base sm:text-2xl font text-left">
              Lead - WordPress Development
            </p>
          </div>
          <div class="flex justify-between items-center pl-4 pr-4 sm:pl-6 sm:pr-6 py-8 border-b-2 border-neutral-700 w-full">
            <p class="text-zinc-400 text-base sm:text-2xl font">Haris Hashmi</p>
            <p class="text-zinc-400 text-base sm:text-2xl font text-left">
              Head of Finance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
