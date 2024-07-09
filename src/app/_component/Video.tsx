import Head from "next/head"
import Image from "next/image"

const Video = () => {
    return (
        <div className='w-full h-full flex justify-center items-center object-cover'>
            <Head>
                <script
                src="https://fast.wistia.com/embed/medias/7x0n5t4hx2.jsonp"
                async
                ></script>
                <script
                src="https://fast.wistia.com/assets/external/E-v1.js"
                async
                ></script> 
            </Head>
            <div
                className="w-full h-full"
                style={{
                overflow: "hidden",
                border: "2px solid rgba(255,255,255,0.75)",
                borderRadius: "1.6rem",
                boxShadow:
                    "0px 18px 36px 0px rgba(255,255,255,0.2), 0px 1px 1px 0px rgba(255,255,255,0.04)",
                zIndex: 50,
                }}
            >
                <div className="w-full h-full relative -z-50">
                    <div
                        className="wistia_embed wistia_async_au1iuqp2bn seo=true videoFoam=true"
                        style={{ height: "100%", width: "100%" }}
                    >
                        <div
                            style={{
                            height: "100%",
                            left: 0,
                            opacity: 0,
                            overflow: "hidden",
                            position: "absolute",
                            top: 0,
                            transition: "opacity 200ms",
                            width: "100%",
                            }}
                        >
                            <Image
                            className="-z-50"
                            src="https://fast.wistia.com/embed/medias/au1iuqp2bn/swatch"
                            style={{
                                filter: "blur(5px)",
                                height: "100%",
                                objectFit: "cover",
                                width: "100%",
                            }}
                            layout="fill"
                            alt=""
                            aria-hidden="true"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Video