import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
  const commissioners = [
    {
      name: "Rajiv Kumar",
      position: "Chief Election Commissioner",
      image: "/images/commissioners/rajiv-kumar.jpg",
      term: "May 15, 2022 - Present",
      bio: "Rajiv Kumar is the 25th Chief Election Commissioner of India. Prior to this, he served as the Financial Services Secretary in the Ministry of Finance."
    },
    {
      name: "Anup Chandra Pandey",
      position: "Election Commissioner",
      image: "/images/commissioners/anup-pandey.jpg",
      term: "June 9, 2021 - Present",
      bio: "Anup Chandra Pandey is a retired IAS officer of the 1984 batch, Uttar Pradesh cadre. Prior to joining the Election Commission, he served as the Chief Secretary of Uttar Pradesh."
    },
    {
      name: "Arun Goel",
      position: "Election Commissioner",
      image: "/images/commissioners/arun-goel.jpg",
      term: "November 21, 2022 - Present",
      bio: "Arun Goel is a retired IAS officer of the 1985 batch, Punjab cadre. He has extensive administrative experience having worked in various ministries including Culture, Labour and Heavy Industries."
    }
  ];

  const milestones = [
    {
      year: "1950",
      title: "Establishment of ECI",
      description: "The Election Commission of India was established on January 25, 1950, a day before India became a republic."
    },
    {
      year: "1951-52",
      title: "First General Elections",
      description: "The Commission conducted India's first general elections with over 173 million voters across the country."
    },
    {
      year: "1989",
      title: "Electronic Voting Machines",
      description: "Introduction of Electronic Voting Machines (EVMs) on an experimental basis."
    },
    {
      year: "1998",
      title: "Widespread EVM Usage",
      description: "EVMs were used in 25 states and union territories for state elections."
    },
    {
      year: "2004",
      title: "Complete EVM Implementation",
      description: "EVMs were used nationwide for the first time in a Lok Sabha election."
    },
    {
      year: "2013",
      title: "Voter Verifiable Paper Audit Trail",
      description: "Introduction of VVPAT to enhance transparency in the voting process."
    },
    {
      year: "2019",
      title: "VVPAT Verification",
      description: "VVPAT slips verification mandated for five randomly selected polling stations per assembly segment."
    }
  ];

  return (
    <>
      <Head>
        <title>About ECI | Election Commission of India</title>
        <meta name="description" content="Learn about the Election Commission of India, its history, functions, and leadership." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-12">
        <div className="container">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Election Commission of India
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              The constitutional authority responsible for administering election processes in India
            </motion.p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="mb-4">
                The Election Commission of India is an autonomous constitutional authority responsible for administering election processes in India. It was established on January 25, 1950, a day before India became a republic.
              </p>
              <p className="mb-4">
                The body administers elections to the Lok Sabha, Rajya Sabha, State Legislative Assemblies, and the offices of the President and Vice President of India. It is responsible for ensuring free and fair elections across the country.
              </p>
              <div className="bg-neutral-light rounded-lg p-4 border-l-4 border-primary">
                <p className="italic">
                  "The Commission's primary goal is to uphold the democratic process through free, fair, and transparent elections, reflecting the will of the people."
                </p>
              </div>
            </div>
            <div className="relative h-96">
              <Image 
                src="/images/about/eci-building.jpg"
                alt="Election Commission of India Headquarters"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section bg-neutral-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Leadership</h2>
            <p className="text-neutral-dark/80">
              Meet the commissioners who currently lead the Election Commission of India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commissioners.map((commissioner, index) => (
              <motion.div
                key={commissioner.name}
                className="bg-white rounded-lg shadow overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-64">
                  <Image 
                    src={commissioner.image}
                    alt={commissioner.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{commissioner.name}</h3>
                  <p className="text-primary font-medium mb-2">{commissioner.position}</p>
                  <p className="text-sm text-neutral-dark/70 mb-3">Term: {commissioner.term}</p>
                  <p className="text-neutral-dark/80">{commissioner.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Historical Milestones</h2>
            <p className="text-neutral-dark/80">
              Key moments in the journey of the Election Commission of India
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-1/2"></div>
                  <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white shadow-lg">
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>
                  <div className={`w-1/2 p-4 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                    <div className="bg-neutral-light rounded-lg p-6 shadow-sm">
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-neutral-dark/80">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Functions Section */}
      <section className="section bg-neutral-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Functions & Responsibilities</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Conduct of elections to Parliament, State Legislatures, and for the offices of President and Vice-President</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Preparation, maintenance, and periodic revision of electoral rolls</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Delimitation of constituencies for elections</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Recognition of political parties and allotment of election symbols</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Ensuring compliance with the Model Code of Conduct during elections</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Resolution of disputes related to elections and electoral processes</p>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/electoral-laws" className="btn-primary">
                  Learn About Electoral Laws
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Image 
                src="/images/about/election-function.jpg"
                alt="Election Officials at Work"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Be a Part of Democracy</h2>
            <p className="text-xl mb-8">
              Learn more about the electoral process and exercise your right to vote
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/voter-services" className="btn bg-white text-primary hover:bg-neutral-light">
                Voter Services
              </Link>
              <Link href="/contact" className="btn border-2 border-white bg-transparent hover:bg-white hover:text-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
