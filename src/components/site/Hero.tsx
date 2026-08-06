import { images } from "@/data/images";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-ink">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={images.hero}
        className="absolute left-1/2 top-1/2 h-[100vw] w-[100vh] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-270 object-cover"
      >
        <source src="/video/vns.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
