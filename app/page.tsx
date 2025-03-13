"use client"; 
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, GraduationCap, MapPin, Users } from "lucide-react";
import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react'; // Ensure to import useForm and ValidationError

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-8 md:py-90 lg:py-32">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="text-5xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500">
              Learn
            </span>,
            <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500">
              Build
            </span>,
            <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-red-500">
              Get Job
            </span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 text-white" style={{ background: 'linear-gradient(to right, #FF5733, #FF6F61, #FF7F50, #FF8C42, #FF9B33, #FFAC33, #FFBF00, #F7D900, #B5E300, #1E9B71), linear-gradient(to top, #FF5733, #FF6F61, #FF7F50, #FF8C42, #FF9B33, #FFAC33, #FFBF00, #F7D900, #B5E300, #1E9B71)' }}>
        <div className="container px-4 md:px-6 flex flex-col items-center justify-center">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Excellence in Tech Education
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              Empowering students with cutting-edge skills in web development and modern technologies
            </p>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <Link href="/courses">
              <Button className="bg-white text-blue-800 hover:bg-white/10">
                Explore Courses
              </Button>
            </Link>
            <Link href="/faq">
              <Button variant="outline" className="border-white text-blue-800 hover:bg-white/10">
                Have a question? Check out the FAQ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">About Us</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Leading VTechnologies</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Founded in 2023, our institute has been at the forefront of technology education, providing industry-relevant training to thousands of students.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Expert Instructors</CardTitle>
                    <GraduationCap className="h-4 w-4 text-white" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">15+</div>
                    <p className="text-xs text-gray-200">Industry professionals</p>
                  </CardContent>
                </Card>

                <Card className="bg-green-500 text-white hover:bg-green-600 transition-colors duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Students Trained</CardTitle>
                    <Users className="h-4 w-4 text-white" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1500+</div>
                    <p className="text-xs text-gray-200">And growing</p>
                  </CardContent>
                </Card>

                <Card className="bg-yellow-500 text-white hover:bg-yellow-600 transition-colors duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Courses</CardTitle>
                    <BookOpen className="h-4 w-4 text-white" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">10+</div>
                    <p className="text-xs text-gray-200">Specialized programs</p>
                  </CardContent>
                </Card>

                <Card className="bg-red-500 text-white hover:bg-red-600 transition-colors duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Locations</CardTitle>
                    <MapPin className="h-4 w-4 text-white" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1</div>
                    <p className="text-xs text-gray-200">Training centers</p>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions about our courses? Fill out the form below and we'll get back to you.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-lg mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactForm() {
  // Using the useForm hook from Formspree
  const [state, handleSubmit] = useForm("myzeyblp");

  // If the form submission is successful, show a success message
  if (state.succeeded) {
    return <p>Thanks for reaching out! We will get back to you soon.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 p-8 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <label htmlFor="first-name" className="text-sm font-medium leading-none text-white">
            First name
          </label>
          <input
            id="first-name"
            name="firstName"
            type="text"
            className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm"
            placeholder="Enter Your First Name"
            required
          />
          <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
        </div>
        <div className="grid gap-2">
          <label htmlFor="last-name" className="text-sm font-medium leading-none text-white">
            Last name
          </label>
          <input
            id="last-name"
            name="lastName"
            type="text"
            className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm"
            placeholder="Enter Your Last Name"
            required
          />
          <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium leading-none text-white">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm"
          placeholder="Enter Your Email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="grid gap-2">
        <label htmlFor="phone" className="text-sm font-medium leading-none text-white">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm"
          placeholder="Enter Your Phone Number"
          required
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </div>
      <div className="grid gap-2">
        <label htmlFor="course" className="text-sm font-medium leading-none text-white">
          Course of Interest
        </label>
        <input
          id="course"
          name="course"
          type="text"
          className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm"
          placeholder="Enter the Course You're Interested In"
          required
        />
        <ValidationError prefix="Course" field="course" errors={state.errors} />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium leading-none text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="flex h-32 w-full rounded-md border border-input bg-white px-3 py-2 text-sm"
          placeholder="Tell us more about your inquiry"
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <Button type="submit" className="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white" disabled={state.submitting}>
        Submit
      </Button>
    </form>
  );
}
