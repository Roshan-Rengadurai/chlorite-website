"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import DownloadModal from "@/components/download-modal"

export function CTA() {
    const [isDownloadOpen, setIsDownloadOpen] = useState(false)

    return (
        <>
            <div className="container px-4 mx-auto">
                <div className="bg-gradient-to-r from-purple-900/20 via-purple-800/20 to-purple-900/20 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-purple-500/30">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Note-Taking?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join thousands of users who have already improved their productivity with Chlorite.
                    </p>
                    <Button
                        onClick={() => setIsDownloadOpen(true)}
                        size="lg"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
                    >
                        Download Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>

            <DownloadModal isOpen={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />
        </>
    )
}
export default CTA