import Image from 'next/image';
import nextjs from '@/public/logos/nextjs.svg';
import reactjs from '@/public/logos/reactjs.svg';
import prisma from '@/public/logos/prisma.svg';
import expressjs from '@/public/logos/expressjs.svg';
import tailwind from '@/public/logos/tailwind.svg';
import javascript from '@/public/logos/javascript.svg';
import postman from '@/public/logos/postman.svg';


export default function MyStack() {
    return (
        <>
            <div className=' flex flex-col gap-4 p-6 border border-solid border border-stone-200 rounded-xl w-max max-lg:w-full'>
                <div className="flex gap-3 items-center">
                    <div className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_250_1167)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5C21.9489 1.5 22.1397 1.57902 22.2803 1.71967C22.421 1.86032 22.5 2.05109 22.5 2.25C22.5 7.306 20.117 11.805 16.416 14.686C16.5699 15.6502 16.5128 16.6364 16.2486 17.5764C15.9844 18.5164 15.5194 19.388 14.8857 20.1308C14.2519 20.8737 13.4646 21.4702 12.5779 21.8792C11.6913 22.2883 10.7264 22.5001 9.75 22.5C9.55109 22.5 9.36032 22.421 9.21967 22.2803C9.07902 22.1397 9 21.9489 9 21.75V17.619C8.02793 16.8514 7.14925 15.9724 6.382 15H2.25C2.05109 15 1.86032 14.921 1.71967 14.7803C1.57902 14.6397 1.5 14.4489 1.5 14.25C1.49992 13.2735 1.71173 12.3085 2.12082 11.4218C2.52991 10.5351 3.12653 9.74765 3.86951 9.11391C4.61249 8.48017 5.48413 8.01519 6.42427 7.75105C7.36442 7.48692 8.35068 7.42992 9.315 7.584ZM15 6.75C14.4033 6.75 13.831 6.98705 13.409 7.40901C12.9871 7.83097 12.75 8.40326 12.75 9C12.75 9.59674 12.9871 10.169 13.409 10.591C13.831 11.0129 14.4033 11.25 15 11.25C15.5967 11.25 16.169 11.0129 16.591 10.591C17.0129 10.169 17.25 9.59674 17.25 9C17.25 8.40326 17.0129 7.83097 16.591 7.40901C16.169 6.98705 15.5967 6.75 15 6.75Z" fill="#F4F4F5" fill-opacity="0.1" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.25979 17.2419C5.33878 17.183 5.4054 17.1092 5.45584 17.0245C5.50627 16.9399 5.53955 16.8461 5.55375 16.7486C5.56796 16.6511 5.56283 16.5518 5.53864 16.4563C5.51445 16.3607 5.47169 16.2709 5.41279 16.1919C5.35389 16.1129 5.28001 16.0463 5.19537 15.9959C5.11073 15.9455 5.01698 15.9122 4.91948 15.898C4.82198 15.8838 4.72263 15.8889 4.62712 15.9131C4.5316 15.9373 4.44178 15.98 4.36279 16.0389C3.59568 16.6096 2.9992 17.3791 2.63788 18.2642C2.27655 19.1494 2.16413 20.1165 2.31279 21.0609C2.33697 21.2182 2.41056 21.3638 2.52291 21.4765C2.63527 21.5892 2.78057 21.6633 2.93779 21.6879C3.88232 21.8365 4.8495 21.7239 5.73466 21.3624C6.61983 21.0009 7.38929 20.4042 7.95979 19.6369C8.02059 19.5582 8.0651 19.4681 8.09073 19.3719C8.11636 19.2758 8.1226 19.1755 8.10909 19.0769C8.09558 18.9783 8.06258 18.8834 8.01202 18.7977C7.96146 18.712 7.89435 18.6372 7.8146 18.5777C7.73484 18.5181 7.64405 18.4751 7.54749 18.451C7.45094 18.4269 7.35056 18.4223 7.2522 18.4374C7.15384 18.4525 7.05947 18.4871 6.97459 18.539C6.88971 18.5909 6.81601 18.6592 6.75779 18.7399C6.40906 19.2089 5.95537 19.5898 5.43304 19.852C4.91071 20.1142 4.33424 20.2505 3.74979 20.2499C3.74979 19.0199 4.34179 17.9269 5.25979 17.2419Z" fill="#F4F4F5" fill-opacity="0.1" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_250_1167">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <h2 className='font-bold'>Mes Competences Techniques</h2>
                </div>
                <p className='w-[480px] text-sm max-xl:w-[390px] max-lg:w-full'>Avec le temps {'j\'ai'} acquis des competences dans differents domaines de la programmation. Voici quelques technologies que {'j\'utilise'} regulierement.
                </p>
                <div className='flex items-center gap-7 flex-wrap '>
                    <Image src={nextjs} alt="next js logo"/>
                    <Image src={reactjs} alt="react js logo"/>
                    <Image src={prisma} alt="prisma logo"/>
                    <Image src={expressjs} alt="express js logo"/>
                    <Image src={javascript} alt="javascript logo"/>
                    <Image src={tailwind} alt="tailwind css logo"/>
                    <Image src={postman} alt ="postman logo"/>
                </div>
            </div>
        </>
    );
}