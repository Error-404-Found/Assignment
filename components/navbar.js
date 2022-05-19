import Image from 'next/image'
import Link from 'next/link'

export default function Testimonials() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-2 col-md-2 col-6'>
                    <div className='logo'>
                        <Link href="/">
                            <Image src='/images/Big Logo.png' width={128} height={60} alt='Logo' />
                        </Link>
                    </div>
                </div> 
                <div className='col-lg-6 col-md-6 d-none d-lg-block d-md-none'>
                    <ul className='menu'>
                        <li>
                            <Link href="/">
                                <a>Platform</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Pricing</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Acceleration</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Resources</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>Customer Stories</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='col-lg-4 col-md-4 col-6'>
                    <div className='buttons'>
                        <Link href="/">
                            <a>Log in</a>
                        </Link>
                        <button className='demo'>SCHEDULE DEMO</button>
                        <button className='free'>TRY for free</button>
                    </div>

                </div>
            </div>
        </div>
    )
}