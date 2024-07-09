import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const Video = () => {
    return (
        <div className="h-full w-full flex justify-center items-center">
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
                className="m-5 max-w-[100rem] w-full lg:w-[86%] "
                style={{
                overflow: "hidden",
                border: "2px solid rgba(255,255,255,0.75)",
                borderRadius: "1.6rem",
                boxShadow:
                    "0px 18px 36px 0px rgba(255,255,255,0.2), 0px 1px 1px 0px rgba(255,255,255,0.04)",
                zIndex: 50,
                }}
            >
                <div
                style={{ padding: "56.25% 0 0 0", position: "relative" }}
                >
                <div
                    style={{
                    height: "100%",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    }}
                >
                    <div
                    className="wistia_embed wistia_async_au1iuqp2bn seo=true videoFoam=true"
                    style={{ height: "100%", position: "relative", width: "100%" }}
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
                        src="https://fast.wistia.com/embed/medias/au1iuqp2bn/swatch"
                        style={{
                            filter: "blur(5px)",
                            height: "100%",
                            objectFit: "contain",
                            width: "100%",
                        }}
                        width={100}
                        height={100}
                        alt=""
                        aria-hidden="true"
                        />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Video