"use client";
import { MyButton } from "@/components/MyButton";
import { useRouter } from "next/navigation";
import motivationBg from "../../../public/motivationBg.webp";
import philosophyBg from "../../../public/philosophyBg.webp";
import successBg from "../../../public/successBg.webp";
import lifeBg from "../../../public/lifeBg.webp";

const categories = [
  {
    name: "Motivation",
    url: "categories/motivation",
    img: motivationBg,
  },
  {
    name: "Life",
    url: "categories/life",
    img: lifeBg,
  },
  {
    name: "Philosophy",
    url: "categories/philosophy",
    img: philosophyBg,
  },
  {
    name: "Success",
    url: "categories/success",
    img: successBg,
  },
];

export default function Categories() {
  const router = useRouter();
  return (
    <section className="grid grid-cols-2 grid-rows-2 h-full w-full gap-4">
      {categories.map(({ name, url, img }) => (
        <MyButton
          variant={"big-button"}
          onClick={() => router.push(url)}
          bgImage={img}
        >
          {name}
        </MyButton>
      ))}
    </section>
  );
}
