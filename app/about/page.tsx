import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, BookOpen, GraduationCap, Users } from "lucide-react"

export default function AboutPage() {
  const instructors = [
    {
      name: "M.Venkat",
      role: "Instructor, Frontend Development,MERN Stack",
     // bio: "Ph.D. in Computer Science with 10+ years of industry experience at Google and Microsoft.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Vinod Kumar",
      role: "Senior Instructor, JAVA Full Stack Development,Vue JS",
     // bio: "Former Tech Lead at Amazon with expertise in scalable web applications and cloud architecture.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Aakhib",
      role: "Instructor, JAVA Full Stack Development",
     // bio: "Former Tech Lead at Amazon with expertise in scalable web applications and cloud architecture.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Vijitha",
      role: "Instructor, Aptitude and Reasoning",
     // bio: "Former Tech Lead at Amazon with expertise in scalable web applications and cloud architecture.",
      image: "/placeholder.svg?height=400&width=400",
    },
    
    
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                About Our Institute
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Empowering the next generation of tech professionals since 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <Image
                src="/logo.png?height=600&width=800"
                width={800}
                height={600}
                alt="Our campus"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Story</h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                Founded in 2023, VTechnologies began with a simple mission: to bridge the gap between
                traditional education and the rapidly evolving tech industry. What started as a small coding bootcamp
                with just 15 students has grown into a comprehensive technology education center with multiple locations
                across the country.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed">
                Our founder, M.venkat, recognized that traditional computer science programs weren't keeping pace
                with industry demands. He assembled a team of industry professionals who were passionate about education
                to create practical, hands-on training programs that prepare students for real-world challenges.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed">
                Today, we've trained over 5,000 students who have gone on to work at leading technology companies
                worldwide. Our curriculum is constantly updated to reflect the latest industry trends and technologies,
                ensuring our graduates are always job-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Us</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                What sets our institute apart from other educational programs
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Industry Expert Instructors</h3>
                <p className="text-center text-gray-500">
                  Learn from professionals with real-world experience in leading tech companies
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Practical Curriculum</h3>
                <p className="text-center text-gray-500">
                  Hands-on projects and real-world applications, not just theory
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Small Class Sizes</h3>
                <p className="text-center text-gray-500">Personalized attention with maximum 20 students per class</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Job Placement Assistance</h3>
                <p className="text-center text-gray-500">
                  Career counseling, resume workshops, and industry connections
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-blue-600"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Flexible Learning Options</h3>
                <p className="text-center text-gray-500">
                  Full-time, part-time, and weekend courses to fit your schedule
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-blue-600"
                  >
                    <path d="M12 2v4" />
                    <path d="M12 18v4" />
                    <path d="m4.93 4.93 2.83 2.83" />
                    <path d="m16.24 16.24 2.83 2.83" />
                    <path d="M2 12h4" />
                    <path d="M18 12h4" />
                    <path d="m4.93 19.07 2.83-2.83" />
                    <path d="m16.24 7.76 2.83-2.83" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Modern Facilities</h3>
                <p className="text-center text-gray-500">State-of-the-art computer labs and collaborative workspaces</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Instructors</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                Learn from industry professionals with years of real-world experience
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
            {instructors.map((instructor, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <Image
                    src={instructor.image || "/placeholder.svg"}
                    width={300}
                    height={300}
                    alt={instructor.name}
                    className="aspect-square rounded-md object-cover"
                  />
                  <div className="space-y-2 mt-4">
                    <h3 className="font-bold">{instructor.name}</h3>
                    <p className="text-sm text-blue-600">{instructor.role}</p>
                    <p className="text-sm text-gray-500">{instructor.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your Journey?</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                Explore our courses and take the first step toward your new career in technology
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/courses">
                <Button className="w-full">
                  Browse Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/#contact-form">
                <Button variant="outline" className="w-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

