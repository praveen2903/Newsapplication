
function About() {
  return (
    <div className="p-5 font-serif text-3xl">
        <div className="underline text-4xl mb-3">About</div>
        <div>
            <div className="space-y-2 mb-5">
                <div>Website is made using Reactjs, TailwindCSS, Vite and Javascript</div>
                <div>
                    Used NewsApi to get the newsfeed, using axios captured data in json form ..
                </div>
            </div>
            <div>
                published the app with source code at ..
            </div>
        </div>

    </div>
  )
}

export default About