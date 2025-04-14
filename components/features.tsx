export function Features() {
    const features = [
        {
            title: "Markdown Support",
            description: "Write in plain text with simple formatting that converts to beautiful documents.",
        },
        {
            title: "Linked Notes",
            description: "Connect your thoughts with bidirectional links to build a personal knowledge graph.",
        },
        {
            title: "Powerful Search",
            description: "Find anything instantly with our lightning-fast full-text search.",
        },
        {
            title: "Cross-Platform",
            description: "Access your notes on any device with our native apps and web interface.",
        },
        {
            title: "Cloud Sync",
            description: "Your notes automatically sync across all your devices in real-time.",
        },
        {
            title: "End-to-End Encryption",
            description: "Your notes are encrypted and only accessible to you.",
        },
    ]

    return (
        <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features, Simple Interface</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Everything you need for effective note-taking without the clutter.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-colors"
                    >
                        <div className="h-14 w-14 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4"></div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Features;