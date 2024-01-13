import useCVStore from "@/store/cv"
import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import CvTemplate from "@/components/cv-template"

export default function Home() {
  const cv = useCVStore((state) => state)

  function handleDownload() {
    const sidebar = document.getElementById("sidebar")
    const cvSection = document.getElementById("cv-section")
    const dwnBtn = document.getElementById("dwn-btn")

    window.addEventListener("beforeprint", () => {
      sidebar?.classList.add("hidden")
      cvSection?.classList.add("col-span-12")
      cvSection?.classList.remove("col-span-8", "col-start-5")
      dwnBtn?.classList.add("hidden")
      document.title = `${cv.firstName || "Your"}_${
        cv.lastName || "Name"
      }_CV_${new Date().getFullYear()}`
    })

    window.addEventListener("afterprint", () => {
      sidebar?.classList.remove("hidden")
      cvSection?.classList.remove("col-span-12")
      cvSection?.classList.add("col-span-8", "col-start-5")
      dwnBtn?.classList.remove("hidden")
      document.title = "CV"
    })

    window.print()
  }

  return (
    <section
      className="col-span-8 col-start-5 max-w-4xl mx-auto py-20"
      id="cv-section"
    >
      <CvTemplate />
      <Button className="fixed rounded-full p-8 right-4 bottom-8" id="dwn-btn">
        <Download onClick={handleDownload} />
      </Button>
    </section>
  )
}
