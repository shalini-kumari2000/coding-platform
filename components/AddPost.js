import { useState } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "../atom/loginState";

export default function AddPost() {
  const [isActive, setIsActive] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const updateModalState = () => setIsActive(!isActive);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

  let handleloginState = () => {
    true;
  };

  let handleloginModal = () => {
    if (isSignIn === true) {
      setIsSignIn(false);
    } else {
      setIsSignIn(true);
    }
  };

  return (
    <>
      <div>
        <a href="#" className="flex btn mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
          <span className="px-2" onClick={updateModalState}>
            Add Post
          </span>
        </a>
      </div>
      {isActive == true ? (
        <div
          className="shadow appearance-none border overflow-y-hidden auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full"
          id="large-modal"
        >
          <div className="flex h-screen justify-center items-center">
            <div className="relative px-4 w-full max-w-4xl h-full md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-black">
                    Add New Post
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="large-modal"
                    onClick={updateModalState}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  <form>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                      >
                        Post Title
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Enter Post Title"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="post-content"
                      >
                        Post Content
                      </label>
                      <textarea
                        className="shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y rounded-md w-full h-400"
                        placeholder="Enter Post Here"
                      ></textarea>
                    </div>
                  </form>
                </div>

                <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                  <button
                    data-modal-toggle="large-modal"
                    type="button"
                    className="text-white bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500"
                    style={{ background: "#18A558" }}
                  >
                    Post
                  </button>
                  <button
                    data-modal-toggle="large-modal"
                    type="button"
                    className="text-white bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500"
                    style={{ background: "#FAD02C" }}
                  >
                    Save as Draft
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
