

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PenLine, Zap, BookOpen, ArrowRight } from "lucide-react"

export default function LandingPage() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <div className="text-2xl font-bold text-blue-400">MathMind</div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#how-it-works">
            How It Works
          </a>
          <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#pricing">
            Pricing
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Solve Math Problems <span className="text-blue-400">Instantly</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Write or draw your math problems, and watch as MathMind solves them in real-time. It's like having a math genius in your pocket!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Try MathMind Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <PenLine className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Handwriting Recognition</h3>
                <p className="text-gray-400">Write or draw your equations naturally, just like on paper.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Real-time Solving</h3>
                <p className="text-gray-400">Watch as your equations are solved instantly as you write them.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BookOpen className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Step-by-Step Explanations</h3>
                <p className="text-gray-400">Get detailed explanations for complex problems to aid learning.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Write or Draw</h3>
                <p className="text-gray-400">Use your finger or stylus to write equations on your device.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">AI Recognition</h3>
                <p className="text-gray-400">Our AI instantly recognizes and interprets your handwriting.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Get Solutions</h3>
                <p className="text-gray-400">See the solution appear in real-time, with optional step-by-step explanations.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col p-6 bg-gray-800 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold mb-4">Basic</h3>
                <p className="text-4xl font-bold mb-4 text-blue-400">Free</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className=" h-5 w-5 text-blue-400 mr-2"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Solve basic equations
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" h-5 w-5 text-blue-400 mr-2"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    5 solves per day
                  </li>
                </ul>
                <Button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
              </div>
              <div className="flex flex-col p-6 bg-blue-600 rounded-lg border border-blue-500">
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <p className="text-4xl font-bold mb-4">$9.99/mo</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className=" h-5 w-5 text-white mr-2"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Solve advanced equations
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" h-5 w-5 text-white mr-2"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Unlimited solves
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" h-5 w-5 text-white mr-2"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Step-by-step explanations
                  </li>
                </ul>
                <Button className="mt-auto bg-white text-blue-600 hover:bg-gray-100">Upgrade to Pro</Button>
              </div>
              <div className="flex flex-col p-6 bg-gray-800 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <p className="text-4xl font-bold mb-4 text-blue-400">Custom</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className=" h-5 w-5 text-blue-400 mr-2"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    All Pro features
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" h-5 w-5 text-blue-400 mr-2"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" h-5 w-5 text-blue-400 mr-2"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Dedicated support
                  </li>
                </ul>
                <Button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
        <p className="text-xs text-gray-400">© 2023 MathMind. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-gray-100" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-gray-100" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}