"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

type DownloadModalProps = {
    isOpen: boolean
    onClose: () => void
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={onClose}>
            <div
                className="bg-gray-900 border border-purple-700/30 rounded-lg max-w-md w-full mx-4 p-6 shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-white">Download Chlorite</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                        <X size={20} />
                    </button>
                </div>

                <p className="text-gray-300 mb-6">Select the version that works best for your system:</p>

                <div className="space-y-3">
                    <a
                        href="https://apple.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md text-center transition-colors"
                    >
                        Download for macOS
                    </a>

                    <a
                        href="https://microsoft.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md text-center transition-colors"
                    >
                        Download for Windows
                    </a>

                    <button
                        disabled
                        className="w-full py-2 px-4 bg-gray-700 text-gray-400 font-medium rounded-md text-center cursor-not-allowed"
                    >
                        Download for Linux (Coming Soon)
                    </button>
                </div>
            </div>
        </div>
    )
}

