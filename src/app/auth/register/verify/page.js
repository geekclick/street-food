import InputOTP from "@/components/InputOTP";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <section>
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 md:py-12 px-8">
          <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
            <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
              <div className="flex flex-col items-center justify-center text-center space-y-2">
                <div className="font-semibold text-3xl">
                  <p>Contact Verification</p>
                </div>
                <div className="flex flex-row text-sm font-medium text-gray-400">
                  <p>
                    We have sent a code to your email{" "}
                    <span className="font-bold text-sm">
                      dummymail@gmail.com
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <form action="" method="post">
                  <div className="flex flex-col space-y-16">
                    <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                      <InputOTP />
                      <InputOTP />
                      <InputOTP />
                      <InputOTP />
                    </div>
                    <div className="flex flex-col space-y-5">
                      <div>
                        <Link
                          href="/"
                          className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-teal-700 border-none text-white text-sm font-bold shadow-sm"
                        >
                          Verify Account
                        </Link>
                      </div>
                      <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                        <p>Didn&apos;t recieve code?</p>{" "}
                        <a
                          className="flex flex-row items-center text-teal-600"
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Resend
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
