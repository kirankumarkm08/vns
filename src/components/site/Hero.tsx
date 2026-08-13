import { images } from "@/data/images";

export function Hero() {
  return (
    <section className="relative aspect-video min-h-[240px] w-full overflow-hidden bg-ink sm:min-h-[360px] lg:aspect-auto lg:h-screen">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={images.hero}
        className="absolute inset-0 h-full w-full object-contain lg:object-cover"
        src="/video/venus-f.mp4"
      />
    </section>
  );
}
