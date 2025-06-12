"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Shield,
  Smartphone,
  Users,
  Star,
  Menu,
  X,
  BarChart3,
  Lock,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Common/Header/page";
import Footer from "@/components/Common/Footer/page";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import animation from '@/public/animation.json'
import LottieAnimation from "@/components/LottieAnimation";
export default function SendlyLanding() {
  const router = useRouter();
  const t = useTranslations("Hero");
  const c = useTranslations("Common");
  const locale = useLocale();

  const features = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description:
        "Your money and data are protected with enterprise-grade encryption and security measures.",
    },
    {
      icon: Zap,
      title: "Instant Transfers",
      description:
        "Send and receive money instantly with our lightning-fast payment processing system.",
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description:
        "Track your spending patterns and get insights to make better financial decisions.",
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description:
        "Manage your finances on the go with our intuitive mobile-optimized interface.",
    },
    {
      icon: Users,
      title: "Easy Sharing",
      description:
        "Split bills, share expenses, and send money to friends and family effortlessly.",
    },
    {
      icon: Lock,
      title: "Privacy Focused",
      description:
        "Your financial data stays private with advanced privacy controls and settings.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content:
        "Sendly has revolutionized how I manage my business finances. The analytics help me make better decisions.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Freelancer",
      content:
        "The instant transfers and expense tracking features have saved me hours every week. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Student",
      content:
        "Perfect for splitting bills with roommates and tracking my budget. The interface is so intuitive.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "1M+", label: "Active Users" },
    { number: "$50B+", label: "Transactions Processed" },
    { number: "99.9%", label: "Uptime" },
    { number: "150+", label: "Countries Supported" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 ">
      {/* Hero Section */}
      <section className="min-h-screen py-16 md:py-24 bg-white dark:bg-black flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight animate-fade-in-up">
              {t("heroTitle")}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl md:max-w-none mx-auto animate-fade-in-up delay-200">
              {t("heroSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12 animate-fade-in-up delay-400">
              <Link href={`/${locale}/sign-up`} passHref>
                <Button
                  size="lg"
                  className="bg-[#04DC6D] hover:bg-[#1a5a1f] hover:text-white text-lg px-8 py-3 rounded-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg"
                >
                  {c("signUp")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              {/* <Button
              onClick={() => router.push(`/${locale}/sign-in`)} /
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 rounded-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg border border-gray-300 dark:border-gray-600 text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {t('watchDemo')}
            </Button> */}
            </div>
          </div>

          {/* Image/Video Placeholder Column */}
          <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in-up delay-600">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              {/* <Image
                src="/sendly_logo-fullcolor-rgb.png"
                alt="Sendly App Demo Video Placeholder"
                className="rounded-3xl"
                width={500}
                height={500}
                priority // Prioritize loading for LCP (Largest Contentful Paint)
              /> */}
            <LottieAnimation
            animationData={animation}
            loop={true}
            autoplay={true}
            style={{ width: "100%", height: "100%" }} 
            className=""
          />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-[#04DC6D] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Everything you need to manage your money
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to make your financial life easier and
              more secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-[#024D0D]" />
                  </div>
                  <h3 className="text-xl font-semibold dark:text-white text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
        {/* About section */}
        <section id="about" className="w-full h-screen bg-white dark:bg-black">
            <div>
              <div className="w-full flex items-center justify-center">
                <h1 className="text-2xl py-2 dark:text-white  text-black">About Sendly</h1>
              </div>
            </div>
        </section>
      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-slate-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Get started in minutes
            </h2>
            <p className="text-xl text-gray-600 dark:text-white">
              Simple steps to take control of your finances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#024D0D] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-medium text-slate-900 dark:text-white  mb-2">
                Sign Up
              </h3>
              <p className="text-gray-600 dark:text-white font-regular">
                Create your account in under 2 minutes with just your email and
                phone number.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#024D0D] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-medium text-slate-900 dark:text-white  mb-2">
                Connect
              </h3>
              <p className="text-gray-600 dark:text-white font-regular">
                Link your bank accounts and cards securely to start managing
                your money.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#024D0D] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-medium text-slate-900 dark:text-white  mb-2">
                Manage
              </h3>
              <p className="text-gray-600 dark:text-white font-regular">
                Send money, track expenses, and get insights to improve your
                financial health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Loved by thousands of users
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers have to say about Sendly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{`"${testimonial.content}"`}</p>
                  <div>
                    <p className="font-semibold text-slate-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Answers to common questions about Sendly
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#024D0D] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to take control of your finances?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join over 1 million users who trust Sendly with their money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Input
              placeholder="Enter your email"
              className="max-w-sm bg-white text-slate-900"
            />
            <Link href="/">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-[#024D0D] hover:bg-gray-100"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <p className="text-sm mt-4 opacity-75">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
