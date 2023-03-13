import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";

const poppins = Poppins({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const AboutSection = () => {
  return (
    <section id="tentang">
      <div className="flex flex-col ">
        <h1 className="text-center text-3xl font-black">Tentang Saya</h1>
        <div className="items-center justify-center sm:m-5 sm:flex sm:flex-row sm:p-5">
          <div className="w-full items-center justify-center sm:w-[50%]">
            <Image
              alt="Maulidya Harisa"
              src="/hero.png"
              width={500}
              height={500}
            />
          </div>
          <div className="items-center justify-center text-center sm:w-[50%] sm:items-start sm:justify-start">
            <p className="">
              Halo, nama saya{" "}
              <span className="underline"> Maulidya Harisa</span>, saya adalah
              seorang fashion designer yang berpengalaman dalam industri fashion
              selama lebih dari <span className="italic"> 2015 tahun</span>.
              <br />
              <br />
              Saya telah bekerja dengan beberapa merek terkenal dan menghasilkan
              koleksi fashion yang sukses.
              <br />
              <br />
              Saya sangat percaya bahwa fashion adalah tentang ekspresi diri,
              dan sebagai seorang fashion designer, saya ingin membantu orang
              merayakan keunikan mereka melalui pakaian yang mereka kenakan.
              Saya senang menciptakan pakaian yang terinspirasi dari seni,
              budaya, dan lingkungan sekitar.
              <br />
              <br />
              Saya memiliki keahlian dalam menggabungkan bahan dan warna yang
              berbeda, menghasilkan pakaian yang menarik dan nyaman dipakai.
              Saya juga terampil dalam mengembangkan desain dari konsep awal
              hingga menjadi produk fashion yang siap dipasarkan.
              <br />
              <br />
              Saat ini, saya sedang fokus pada mengembangkan merek fashion saya
              sendiri, yang menekankan pada keberlanjutan dan kualitas yang
              tahan lama. Saya berharap dapat terus memperluas jangkauan merek
              saya dan membuat perbedaan positif dalam industri fashion.
              <br />
              <br />
              Terima kasih telah membaca tentang saya, dan saya berharap dapat
              bekerja sama dengan Anda untuk menciptakan pakaian yang unik dan
              memuaskan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
