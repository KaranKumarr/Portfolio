import React from 'react';
import { motion } from 'framer-motion';

export default function Icons() {


    return (
        <div className='flex my-4 flex-row-reverse w-1/5 justify-around items-center'>
            <motion.a
                href='mailto:karankumar0334@gmail.com'
                whileTap={
                    {
                        rotate: 20
                    }

                }
                className='icon-container'>
                <svg
                    className='icon'
                    xmlns="http://www.w3.org/2000/svg"

                    viewBox="0 0 100 100"
                >
                    <path
                        d="M46.187.098c-7.403.703-12.91 2.265-19.141 5.43-7.383 3.769-14.004 9.707-18.848 16.894-2.031 3.047-4.531 8.184-5.742 11.816a57.586 57.586 0 00-2.207 9.57c-.332 2.305-.332 10 0 12.305.82 5.762 2.344 10.801 4.727 15.625 2.675 5.47 5.312 9.141 9.648 13.496 4.316 4.297 8.047 6.973 13.3 9.551 3.673 1.797 6.036 2.676 9.766 3.614 9.766 2.461 19.57 1.992 29.102-1.387 2.91-1.035 7.95-3.555 10.547-5.293 7.129-4.746 13.027-11.29 16.914-18.809 3.535-6.797 5.293-13.554 5.586-21.289.293-8.32-1.426-16.25-5.137-23.71-2.422-4.884-5.137-8.731-8.945-12.657-4.219-4.375-8.36-7.383-13.887-10.117C66.09 2.285 60.698.742 54.292.157 52.3-.02 47.788-.059 46.187.096zm32.597 27.89c1.172.645 2.149 1.7 2.793 3.008l.45.899V68.028l-.45.898c-.644 1.308-1.62 2.363-2.793 3.008l-1.055.586H22.066l-1.054-.586c-1.172-.645-2.149-1.7-2.793-3.008l-.45-.898V31.895l.547-1.114c.665-1.347 1.954-2.539 3.34-3.066.977-.39 1.485-.39 28.535-.352l27.54.04 1.054.585z"
                    ></path>
                    <path

                        d="M28.218 32.656c.625.586 21.308 16.934 21.562 17.032.196.078 20.469-15.762 21.797-17.032.234-.234-2.832-.273-21.68-.273-18.77 0-21.914.04-21.68.273z"
                    ></path>
                    <path

                        d="M22.944 50.996c0 15.157.02 15.918.352 16.211.332.313 2.46.332 26.64.332 25.235 0 26.29-.02 26.602-.351.293-.332.313-1.68.273-16.192l-.058-15.84-4.102 3.282C56.304 51.446 50.952 55.625 50.464 55.723c-.313.078-.82.078-1.113 0-.293-.059-3.711-2.617-7.578-5.684-5.567-4.433-15.762-12.5-18.38-14.59l-.449-.351v15.898z"
                    ></path>
                </svg>
            </motion.a>
            <motion.a
                href='https://www.fiverr.com/karankumar74?'
                whileTap={
                    {
                        rotate: 20
                    }
                }
                className='icon-container'>
                <svg
                    className='icon'
                    xmlns="http://www.w3.org/2000/svg"

                    viewBox="0 0 100 100"
                >
                    <path

                        d="M39.833.215C29.771 1.309 20.73 7.363 16.375 15.918c-2.02 3.926-2.792 7.05-2.98 11.953l-.124 3.379H0V50h13.333v31.25H0V100h46.667V81.25H33.333V50h33.542v31.25H53.333V100H100V81.25H86.667v-50H33.333v-1.914c.021-3.613.813-5.684 3.021-7.754 2.625-2.46 4.084-2.832 11.625-2.832h5.354V0l-5.979.02c-3.312.02-6.687.097-7.52.195z"
                    ></path>
                    <path

                        d="M74.458.293c-1.854.371-3.333 1.152-4.812 2.559-3.917 3.652-3.896 9.394.02 13.086a10.234 10.234 0 0014 0c3.917-3.692 3.938-9.434.022-13.086-1.5-1.426-2.959-2.188-4.917-2.579-1.667-.332-2.646-.332-4.313.02z"
                    ></path>
                </svg>
            </motion.a>
            <motion.a
                href='https://github.com/KaranKumarr'
                whileTap={
                    {
                        rotate: 20
                    }
                }
                className='icon-container'>
                <svg
                    className='icon'
                    xmlns="http://www.w3.org/2000/svg"

                    viewBox="0 0 100 100"
                >
                    <path

                        d="M50 0C22.375 0 0 22.956 0 51.27 0 73.925 14.325 93.14 34.188 99.91c2.5.483 3.416-1.102 3.416-2.465 0-1.217-.041-4.443-.062-8.716C23.633 91.824 20.7 81.852 20.7 81.852c-2.275-5.918-5.563-7.498-5.563-7.498-4.529-3.18.35-3.115.35-3.115 5.021.359 7.659 5.28 7.659 5.28 4.458 7.84 11.704 5.576 14.562 4.265.45-3.316 1.738-5.576 3.167-6.858C29.771 72.645 18.1 68.236 18.1 48.591c0-5.597 1.938-10.169 5.146-13.758-.563-1.294-2.25-6.507.437-13.569 0 0 4.188-1.376 13.75 5.255 4-1.14 8.25-1.705 12.5-1.73 4.25.025 8.5.59 12.5 1.73 9.5-6.63 13.688-5.255 13.688-5.255 2.687 7.062 1 12.275.5 13.57 3.187 3.588 5.125 8.16 5.125 13.757 0 19.696-11.688 24.032-22.813 25.293 1.75 1.538 3.375 4.682 3.375 9.484 0 6.862-.062 12.374-.062 14.04 0 1.346.875 2.948 3.437 2.435C85.687 93.118 100 73.893 100 51.27 100 22.957 77.612 0 50 0"
                    ></path>
                </svg>
            </motion.a>
            <motion.a
                href='https://www.linkedin.com/in/karan-kumarr/'
                whileTap={
                    {
                        rotate: 20
                    }
                }
                className='icon-container'>
                <svg
                    className='icon'
                    xmlns="http://www.w3.org/2000/svg"

                    viewBox="0 0 100 100"
                >
                    <path

                        d="M45.243.125C29.597 1.75 15.887 10.263 7.555 23.532c-11.813 18.808-9.583 43.78 5.359 60.043 8.312 9.042 18.6 14.424 30.96 16.185 2.327.333 10.014.313 12.42-.02 12.164-1.683 22.452-7.045 30.744-16.047 6.826-7.398 11.187-16.87 12.713-27.517.332-2.31.332-10.02 0-12.33-1.154-8.141-3.736-15.05-8.02-21.508-1.798-2.74-3.617-4.97-6.16-7.535C77.768 6.897 68.106 2.024 56.978.38 54.572.028 47.629-.13 45.243.125zm-13.456 25.13c1.682.508 2.797 1.408 3.58 2.915.586 1.155.664 1.507.664 2.76 0 1.194-.078 1.605-.567 2.563-1.056 2.036-3.149 3.21-5.75 3.21-1.623 0-2.601-.274-3.794-1.018-1.663-1.056-2.543-2.779-2.523-4.95.02-4.032 4.166-6.733 8.39-5.48zM66.228 40.93c4.303.881 7.687 3.973 9.095 8.396.84 2.564.92 3.973.92 15.285v10.842H64.917l-.059-10.529c-.058-10.314-.058-10.529-.488-11.566-1.096-2.662-2.289-3.562-4.87-3.699-1.389-.078-1.741-.02-2.66.391-1.447.666-2.328 1.488-3.11 2.936l-.665 1.233-.059 10.607-.058 10.627H41.625V41.4h11.343l.02 2.388c0 2.29.02 2.387.313 1.918.763-1.175 3.129-3.269 4.361-3.875 2.386-1.175 5.594-1.507 8.566-.9zM35.367 58.427v17.026H24.023V41.4h11.343v17.027z"
                    ></path>
                </svg>
            </motion.a>
        </div>
    );
}
