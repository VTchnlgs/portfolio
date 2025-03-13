import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft } from "lucide-react"

export default function FAQPage() {
  const faqs = [
    {
      question: "What are the prerequisites for your courses?",
      answer:
        "Prerequisites vary by course. For beginner courses like our introductory programming classes, no prior experience is required. For more advanced courses, such as our full-stack development programs, basic programming knowledge is recommended. Each course page lists specific prerequisites, and our admissions team can help determine the right starting point for your skill level.",
    },
    {
      question: "Do you offer job placement assistance?",
      answer:
        "Yes, we provide comprehensive job placement assistance. This includes resume building workshops, interview preparation, portfolio development, and connections with our industry partners. Our career services team works with students individually to help them find opportunities that match their skills and career goals. We're proud that 85% of our graduates find relevant employment within three months of completing our programs.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 7-day money-back guarantee for all our courses. If you're not satisfied with the course content within the first week, you can request a full refund. After the first week, refunds are prorated based on the portion of the course completed. For special circumstances, please contact our student services team to discuss your situation.",
    },
    {
      question: "Can I switch between courses if I change my mind?",
      answer:
        "Yes, you can switch between courses within the first two weeks of starting a program. There may be a small administrative fee, and any difference in course prices will be either charged or refunded accordingly. Please contact our admissions office as soon as possible if you're considering a switch.",
    },
    {
      question: "Do you offer financial aid or payment plans?",
      answer:
        "Yes, we offer several financial options to make our courses more accessible. These include installment payment plans (typically 3-6 months with no interest), income share agreements for select programs, and scholarships for underrepresented groups in tech. Our financial aid team can help you explore the best options for your situation.",
    },
    {
      question: "Are your courses available online or only in-person?",
      answer:
        "We offer both in-person and online options for most of our courses. Our online programs provide the same curriculum and instructor support as our in-person classes, with additional tools for remote collaboration and learning. Some specialized courses may only be available in specific formats, so please check the course details or contact us for more information.",
    },
    {
      question: "What kind of support do students receive during the course?",
      answer:
        "Students receive multi-layered support throughout their learning journey. This includes direct access to instructors during and after class hours, teaching assistants for additional help with assignments, peer study groups, and online forums. We also provide technical support for any platform-related issues and academic advisors who can help with course planning and progression.",
    },
    {
      question: "How much time should I expect to commit to a course?",
      answer:
        "For full-time courses, students should expect to commit 30-40 hours per week, including classroom time and assignments. Part-time courses typically require 15-20 hours per week. Weekend bootcamps are intensive and may require 8-10 hours each day of the weekend. We recommend setting aside additional time for practice and portfolio projects to maximize your learning experience.",
    },
    
    {
      question: "Can I speak with former students before enrolling?",
      answer:
        "We encourage prospective students to connect with our alumni. We regularly host information sessions where you can meet graduates, and we can also arrange one-on-one conversations with former students who took the course you're interested in. This gives you authentic insights into the student experience and potential outcomes.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Frequently Asked Questions
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Find answers to common questions about our courses, admissions, and more
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-500">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-gray-500 mb-4">Still have questions? We're here to help!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact-form">
                  <Button>Contact Us</Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

