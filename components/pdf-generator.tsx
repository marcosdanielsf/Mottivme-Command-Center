"use client"

import { Button } from "@/components/ui/button"
import { Download, Loader2 } from "lucide-react"
import type { Invoice } from "@/lib/types"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import jsPDF from "jspdf"
import html2canvas from "html2canvas-pro"

interface PDFGeneratorProps {
  invoice: Invoice
}

export function PDFGenerator({ invoice }: PDFGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const { toast } = useToast()

  const generatePDF = async () => {
    setIsGenerating(true)
    try {
      const node = document.getElementById("invoice-preview")
      if (!node) {
        throw new Error("Invoice preview element not found in DOM")
      }

      const TARGET_WIDTH_PX = 896

      const canvas = await html2canvas(node, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true,
        allowTaint: false,
        logging: false,
        width: TARGET_WIDTH_PX,
        windowWidth: TARGET_WIDTH_PX,
        onclone: (clonedDoc) => {
          const cloned = clonedDoc.getElementById("invoice-preview")
          if (cloned) {
            ;(cloned as HTMLElement).style.width = `${TARGET_WIDTH_PX}px`
            ;(cloned as HTMLElement).style.maxWidth = `${TARGET_WIDTH_PX}px`
            ;(cloned as HTMLElement).style.minWidth = `${TARGET_WIDTH_PX}px`
            ;(cloned as HTMLElement).style.margin = "0"
          }
        },
      })

      const imgData = canvas.toDataURL("image/png", 1.0)

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true,
      })

      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()

      const imgWidth = pageWidth
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      let heightLeft = imgHeight
      let position = 0

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight, undefined, "FAST")
      heightLeft -= pageHeight

      while (heightLeft > 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight, undefined, "FAST")
        heightLeft -= pageHeight
      }

      const clientName = invoice.client?.name || "Client"
      const fileName = `Invoice-${invoice.number}-${clientName.replace(/\s+/g, "-")}.pdf`
      pdf.save(fileName)

      toast({
        title: "PDF Downloaded",
        description: `Invoice ${invoice.number} has been downloaded successfully.`,
      })
    } catch (error) {
      console.error("PDF Generation Error:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to generate PDF. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Button onClick={generatePDF} disabled={isGenerating} size="lg" className="gap-2">
      {isGenerating ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Download className="h-5 w-5" />
          Download PDF
        </>
      )}
    </Button>
  )
}
