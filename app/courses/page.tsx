import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Clock, Users } from "lucide-react"

export default function CoursesPage() {
  const courses = [
    {
      id: "react-js",
      title: "React JS",
      category: "Frontend Development",
      description: "Master the most popular JavaScript library for building interactive user interfaces",
      duration: "12 weeks",
      level: "Beginner to Advanced",
      students: "1,000+",
    },
    {
      id: "angular-js",
      title: "Angular JS",
      category: "Frontend Development",
      description: "Learn the powerful framework for building dynamic web applications",
      duration: "16 weeks",
      level: "Intermediate",
      students: "950+",
    },
    {
      id: "vue-js",
      title: "Vue JS",
      category: "Frontend Development",
      description: "Explore the progressive JavaScript framework for building user interfaces",
      duration: "12 weeks",
      level: "Beginner to Intermediate",
      students: "800+",
    },
    {
      id: "mern-stack",
      title: "MERN Stack",
      category: "Full Stack Development",
      description: "Comprehensive training in MongoDB, Express, React, and Node.js",
      duration: "21 weeks",
      level: "Intermediate to Advanced",
      students: "1,000+",
    },
    
    {
      id: "java-full-stack",
      title: "Java Full Stack",
      category: "Full Stack Development",
      description: "Comprehensive training in Java, Spring Boot, and React for enterprise applications",
      duration: "16 weeks",
      level: "Beginner to Advanced",
      students: "1,100+",
    },
    {
      id: "reasoning-aptitude",
      title: "Reasoning and Aptitude",
      category: "Placement Training",
      description: "Prepare for placement exams and improve your problem-solving skills.",
      duration: "8 weeks",
      level: "Beginner to Intermediate",
      students: "5000+",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Our Courses</h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Explore our comprehensive range of technology courses designed to prepare you for the industry
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.id} className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.category}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-gray-500 mb-4">{course.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span>{course.students}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/courses/${course.id}`} className="w-full">
                    <Button variant="outline" className="w-full">
                      View Syllabus <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your Learning Journey?</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to learn more about our courses and enrollment process
              </p>
            </div>
            <Link href="/#contact-form">
              <Button size="lg">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
