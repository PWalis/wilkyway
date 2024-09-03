import react from "react";

export default function AboutUs() {
  return (
    <main className="min-h-[60rem] mx-10 py-[10rem]">
      <div className="flex flex-col items-center">
        <h1 className="text-[2rem] lg:text-[3rem] font-gunterz max-w-[100rem] w-full text-center mb-[5rem]">
          MEET OUR TEAM
        </h1>
        <div className="flex flex-col gap-16 items-center justify-center">
          <div className="flex justify-center">
            <div className="flex flex-col items-end justify-center gap-3">
              <h4 className="font-gunterz max-w-[30rem] text-center">
                COFOUNDER, SALES EXPERT, SOFTWARE DEVELOPER
              </h4>
              <img
                className="rounded-tr-[130px] rounded-bl-[130px]"
                src="https://placehold.co/500"
              />
            </div>
            <div className="flex flex-col items-end justify-center max-w-[40rem] p-24 gap-5">
              <h4 className="w-full text-left font-gunterz">PATRICK WILKY</h4>
              <p className="max-w-[30rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                similique ipsum. Sed unde necessitatibus, est omnis repellat
                facilis quaerat ipsum dolorem reprehenderit debitis itaque aut
                blanditiis sit officiis rem tenetur hic amet iste, a labore
                beatae? Consequuntur numquam incidunt recusandae ipsam autem
                iusto corrupti fugit sit eius ratione voluptate magni enim
                assumenda totam libero, officia, quibusdam cum dolores
                laudantium quam dicta alias! Quis iure eveniet, fugit inventore
                illum nihil impedit eligendi veniam beatae iste nemo magnam
                aspernatur, itaque nostrum facere consequuntur ea, architecto
                odit nobis illo error porro! Unde tenetur iusto sunt sint
                possimus soluta iure blanditiis quos voluptatem libero!
              </p>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="flex flex-col items-end justify-center max-w-[40rem] p-24 gap-5">
              <h4 className="w-full text-left font-gunterz">DAISY WILKY</h4>
              <p className="max-w-[30rem]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam, atque corporis necessitatibus, enim quae dolorem nihil
                libero repudiandae, provident facilis saepe! Vitae pariatur
                quisquam eos nisi labore quia, quidem facilis saepe? Culpa animi
                fuga, placeat nesciunt officia, deserunt ex nemo corporis minus
                magnam sunt voluptatem dolores, minima deleniti incidunt itaque
                eos. Eius porro harum minus, aperiam veniam eos facere sed
                debitis dicta illo, pariatur totam fugiat quaerat nesciunt
                blanditiis, voluptate quis excepturi. Dolorem recusandae,
                accusantium natus saepe quas maxime corporis optio repudiandae
                aspernatur odit harum alias enim architecto eaque? Quidem,
                asperiores dignissimos modi commodi accusantium similique?
                Obcaecati voluptates suscipit fugit.
              </p>
            </div>
            <div className="flex flex-col items-end justify-center gap-3" >
              <h4 className="font-gunterz max-w-[30rem] text-center">
                COFOUNDER, UX/UI DESIGNER, BRANDING EXPERT
              </h4>
              <img
                className="rounded-tr-[130px] rounded-bl-[130px]"
                src="http://placehold.co/500"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
