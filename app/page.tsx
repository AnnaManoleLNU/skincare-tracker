import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Track your&nbsp;</h1>
        <h1 className={title({ color: "pink" })}>skincare &nbsp;</h1>
        <br />
        <h1 className={title()}>routine </h1>
        <h1 className={title({ color: "yellow" })}>everyday.</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Visualize your progress.
        </h2>
      </div>
    </section>
  );
}
