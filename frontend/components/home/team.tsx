import React from 'react';
function Index() {
  return (
    <div>
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            The Talented People Behind the Scenes of the MedScribe
          </h1>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://avatars.githubusercontent.com/u/60486289?v=4"
                      alt="Shivam Shekhar"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 my-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Shivam Shekhar
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    MS CE @ Columbia
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Its all binary!
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://avatars.githubusercontent.com/u/66498760?v=4"
                      alt="Shivam Shekhar"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 my-16">
                  <div className="font-bold text-3xl text-center pb-1">Jon</div>
                  <p className="text-gray-800 text-sm text-center">CS @ BC</p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Its all cool!
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://avatars.githubusercontent.com/u/59989977?v=4"
                      alt="Jia"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 my-16">
                  <div className="font-bold text-3xl text-center pb-1">Jia</div>
                  <p className="text-gray-800 text-sm text-center">
                    MS CS @ Columbia
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    I like winters!
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://avatars.githubusercontent.com/u/104233184?v=4"
                      alt="asad"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 my-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Asad Nabi
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    CS @ Cornell
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    NYC is cool!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
