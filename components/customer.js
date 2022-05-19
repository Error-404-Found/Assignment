import Testimonials from './testimonial'

export default function Customers() {
    return (
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h2 className='customer_title'>What our customers have to say</h2>
                        <Testimonials />
                    </div>
                </div>
            </div>
        </section>
    )
}