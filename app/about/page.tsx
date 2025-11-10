import Image from "next/image";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import Vision from "../../public/vision.png";
import Mission from "../../public/mission2.png";
import Direct from "../../public/direct.png";
import Fair from "../../public/fair.png";
import Support from "../../public/support.png";
import Fresh from "../../public/fresh.png";
import Sourcing from "../../public/supporting.png";
import Choice from "../../public/choice.png";

const About = () => {
    return(
        <div>
            <Header/>
            <nav className="flex flex-col items-center mt-20">
                <h1 className="text-5xl w-[60%] text-center font-bold mb-5">Cultivating a Better Tomorrow, Together</h1>
                <p className="w-[55%] text-center text-gray-500">AgroLink was founded on a simple yet powerful idea: to bridge the gap between hard-working farmers and conscious consumers. We believe in the power of direct connections to cultivate a fairer, more sustainable food system worldwide. Join us on our journey.</p>
            </nav>

            <main>
                <section className="bg-gray-100 mt-30 py-15 min-h-30">
                    <h2 className="text-center font-bold text-4xl">Our Vision & Mission</h2>
                    <div className="flex justify-center gap-10 mt-20">
                        <nav className="flex flex-col items-center w-[35%] py-4 min-h-50 bg-white rounded-sm text-center">
                            <Image
                                src={Vision}
                                alt="Logo"
                                width={100}
                                height={100}
                            />
                            <h4 className="font-bold mt-3">Our Vision</h4>
                            <p className="mt-3 w-[90%]">To create a global ecosystem where farmers thrive, sustainability flourishes, and everyone has access to wholesome, locally-sourced produce, fostering a healthier planet.</p>
                        </nav>
                        <nav className="flex flex-col py-4 items-center w-[35%] min-h-50 bg-white rounded-sm text-center">
                            <Image
                                src={Mission}
                                alt="Logo"
                                width={100}
                                height={100}
                            />
                            <h4 className="font-bold mt-3">Our Mission</h4>
                            <p className="mt-3 w-[90%]">To empower agricultural communities by connecting farmers directly with buyers, ensuring fair prices, transparent trade, and a sustainable, resilient future for food production globally.</p>
                        </nav>
                    </div>
                </section>

                <h2 className="text-center mt-30 text-4xl">Benefits for Farmers</h2>
                <section className="flex gap-10 mt-10 w-[80%] min-h-40 mx-auto">
                    <div className="flex flex-col items-center text-center">
                        <Image src={Direct} width={100} height={100} alt="direct" />
                        <h4 className="text-1xl my-3 font-bold">Direct Market Access</h4>
                        <p>Connect directly with a wide network of buyers, eliminating middlemen and expanding your reach.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <Image src={Fair} width={100} height={100} alt="Fair" />
                        <h4 className="text-1xl my-3 font-bold">Fair Pricing & Transparency</h4>
                        <p>Set your own prices, transparently, and receive a fair share for your dedication and quality produce.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <Image src={Mission} width={100} height={100} alt="Sustain" />
                        <h4 className="text-1xl my-3 font-bold">Sustainable Practices</h4>
                        <p>Support and grow a community dedicated to eco-friendly farming and responsible resource management.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <Image src={Support} width={100} alt="support" height={100} />
                        <h4 className="text-1xl my-3 font-bold">Community Support</h4>
                        <p>Join a global network of farmers, share knowledge, and grow together with collective strength.</p>
                    </div>
                </section>

                <h2 className="text-center mt-50 text-4xl">Benefits for Buyers</h2>
                <section className="flex gap-10 mt-10 w-[80%] min-h-40 mx-auto">
                    <div className="flex flex-col bg-gray-100 items-center text-center pb-3">
                        <Image src={Fresh} width={100} height={100} alt="direct" />
                        <h4 className="text-1xl my-3 font-bold">Fresh, Local Produce</h4>
                        <p className="w-[90%]">Access high-quality, fresh produce directly from local and international farmers, delivered to your door.</p>
                    </div>
                    <div className="flex flex-col bg-gray-100 items-center text-center pb-3">
                        <Image src={Vision} width={100} height={100} alt="Fair" />
                        <h4 className="text-1xl my-3 font-bold">Support Farmers Directly</h4>
                        <p className="w-[90%]">Know where your food comes from and contribute directly to farmer livelihoods and sustainable growth.</p>
                    </div>
                    <div className="flex flex-col bg-gray-100 items-center text-center pb-3">
                        <Image src={Sourcing} width={100} height={100} alt="Sustain" />
                        <h4 className="text-1xl my-3 bg-gray-100 font-bold">Transparent Sourcing</h4>
                        <p className="w-[90%]">Gain insights into farming practices, origins, and the complete journey of your food, from farm to table.</p>
                    </div>
                    <div className="flex flex-col bg-gray-100 items-center text-center pb-3">
                        <Image src={Choice} width={100} alt="support" height={100} />
                        <h4 className="text-1xl my-3 font-bold">Sustainable Choices</h4>
                        <p className="w-[90%]">Make environmentally conscious purchasing decisions, supporting a greener planet and ethical production.</p>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}
export default About;