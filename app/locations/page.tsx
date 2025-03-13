import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export default function LocationsPage() {
  const locations = [
    {
      id: "new-york",
      //city: "New York",
      //address: "123 Education St, New York, NY 10001",
      phone: "+91 8919615299",
      email: "vtchnlgs@gmail.com",
      hours: "Monday - Friday: 8.30 PM - 11.00 PM",
      courses: ["React JS", "Angular JS", "MERN Stack", "Java Full Stack"],
      //mapUrl: "https://maps.google.com/?q=India",
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Our Locations</h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Visit one of our training centers to learn more about our courses and meet our instructors
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <Card key={location.id} id={location.id} className="overflow-hidden">
                <CardHeader className="bg-gray-50 dark:bg-gray-800">
                  <CardTitle>{location.city}</CardTitle>
                  <CardDescription>Training Center</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-sm text-gray-500">{location.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-gray-500">{location.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-gray-500">{location.email}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-sm text-gray-500">{location.hours}</p>
                  </div>
                  <div>
                    <p className="font-medium">Courses Offered</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      {location.courses.map((course, index) => (
                        <li key={index} className="text-sm text-gray-500">
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4">
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm font-medium"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

