"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  Package,
  FileText,
  Award,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Activity,
  Clock,
  CheckCircle,
  Loader2,
} from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from "recharts"

export default function LandingPage() {
  const [showDemo, setShowDemo] = useState(false)

  const features = [
    {
      icon: Users,
      title: "Hospitals & Patients",
      description: "Comprehensive management of hospital partnerships and patient records with secure data handling.",
    },
    {
      icon: Package,
      title: "Blood Inventory",
      description: "Real-time tracking of blood units, expiration dates, and automated alerts for low stock levels.",
    },
    {
      icon: FileText,
      title: "Request Management",
      description: "Streamlined blood request processing with priority handling and instant notifications.",
    },
    {
      icon: Award,
      title: "Donor Rewards",
      description: "Gamified donor experience with points, badges, and recognition programs to encourage donations.",
    },
  ]

  const steps = [
    {
      icon: Heart,
      title: "Donation",
      description: "Donors register and contribute blood at certified centers",
    },
    {
      icon: Package,
      title: "Inventory",
      description: "Blood units are processed, tested, and stored in our system",
    },
    {
      icon: FileText,
      title: "Request",
      description: "Hospitals submit requests for specific blood types and quantities",
    },
    {
      icon: Award,
      title: "Rewards",
      description: "Donors earn points and recognition for their life-saving contributions",
    },
  ]

  if (showDemo) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <DashboardDemo onBack={() => setShowDemo(false)} />
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-br from-background to-muted py-20 px-4"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 4,
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Activity className="w-4 h-4" />
              </motion.div>
              Saving Lives Through Technology
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Modern Blood Bank
              <motion.span
                className="text-primary block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Management System
              </motion.span>
            </h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Streamline blood donation processes, manage inventory efficiently, and connect donors with those in need
              through our comprehensive digital platform.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setShowDemo(true)}
              >
                Get Started
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-transparent hover:bg-primary/5 transition-all duration-300"
                onClick={() => setShowDemo(true)}
              >
                View Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Comprehensive Blood Bank Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage a modern blood bank efficiently and effectively
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  <CardHeader className="text-center">
                    <motion.div
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined process from donation to delivery, ensuring every drop counts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0">
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-primary"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                    />
                    <motion.div
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.2 + 1.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                )}
                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground"
                    whileHover={{ scale: 1.1 }}
                    whileInView={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(176, 0, 32, 0.4)",
                        "0 0 0 10px rgba(176, 0, 32, 0)",
                        "0 0 0 0 rgba(176, 0, 32, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.2,
                    }}
                    viewport={{ once: true }}
                  >
                    <step.icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="w-8 h-8 text-primary" />
              </motion.div>
              <span className="text-xl font-bold text-foreground">BloodBank Pro</span>
            </motion.div>

            <div className="flex items-center gap-6">
              {[
                { icon: Github, label: "GitHub" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Mail, label: "Contact" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Button variant="ghost" size="sm" className="gap-2 hover:bg-primary/10 transition-colors">
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-8 pt-8 border-t border-border text-center text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2024 BloodBank Pro. Built with React, Next.js, and TailwindCSS for demonstration purposes.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

// Dashboard Demo Component
function DashboardDemo({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isLoading, setIsLoading] = useState(false)

  const handleTabChange = (tabId: string) => {
    if (tabId !== activeTab) {
      setIsLoading(true)
      setTimeout(() => {
        setActiveTab(tabId)
        setIsLoading(false)
      }, 300)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <motion.div
          className="w-64 bg-sidebar border-r border-sidebar-border"
          initial={{ x: -264 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="p-6">
            <motion.div
              className="flex items-center gap-2 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="w-8 h-8 text-sidebar-primary" />
              </motion.div>
              <span className="text-xl font-bold text-sidebar-foreground">BloodBank Pro</span>
            </motion.div>

            <nav className="space-y-2">
              {[
                { icon: Activity, label: "Dashboard", id: "dashboard" },
                { icon: Users, label: "Donors", id: "donors" },
                { icon: Users, label: "Patients", id: "patients" },
                { icon: Package, label: "Inventory", id: "inventory" },
                { icon: FileText, label: "Requests", id: "requests" },
                { icon: Award, label: "Rewards", id: "rewards" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ x: 4 }}
                >
                  <Button
                    variant={activeTab === item.id ? "default" : "ghost"}
                    className="w-full justify-start gap-3 transition-all duration-200"
                    onClick={() => handleTabChange(item.id)}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </nav>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="flex-1 p-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center h-64"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Loader2 className="w-8 h-8 text-primary" />
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "dashboard" && <DashboardContent onBack={onBack} />}
                {activeTab === "donors" && <DonorsContent />}
                {activeTab === "patients" && <PatientsContent />}
                {activeTab === "inventory" && <InventoryContent />}
                {activeTab === "requests" && <RequestsContent />}
                {activeTab === "rewards" && <RewardsContent />}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

function DashboardContent({ onBack }: { onBack: () => void }) {
  const bloodGroupData = [
    { bloodType: "O+", units: 45, percentage: 28 },
    { bloodType: "A+", units: 38, percentage: 24 },
    { bloodType: "B+", units: 31, percentage: 19 },
    { bloodType: "O-", units: 23, percentage: 14 },
    { bloodType: "A-", units: 19, percentage: 12 },
    { bloodType: "B-", units: 12, percentage: 7 },
    { bloodType: "AB+", units: 8, percentage: 5 },
    { bloodType: "AB-", units: 5, percentage: 3 },
  ]

  const donationTrendData = [
    { month: "Jan", donations: 120, requests: 95 },
    { month: "Feb", donations: 135, requests: 110 },
    { month: "Mar", donations: 148, requests: 125 },
    { month: "Apr", donations: 162, requests: 140 },
    { month: "May", donations: 155, requests: 135 },
    { month: "Jun", donations: 178, requests: 150 },
  ]

  const urgencyData = [
    { name: "Critical", value: 8, color: "#dc2626" },
    { name: "High", value: 15, color: "#ea580c" },
    { name: "Medium", value: 32, color: "#ca8a04" },
    { name: "Low", value: 45, color: "#16a34a" },
  ]

  return (
    <>
      <motion.div
        className="flex items-center justify-between mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="outline" onClick={onBack}>
            Back to Landing
          </Button>
        </motion.div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Total Donors", value: "2,847", icon: Users, change: "+12%", trend: "up" },
          { title: "Blood Units in Stock", value: "1,234", icon: Package, change: "+8%", trend: "up" },
          { title: "Pending Requests", value: "23", icon: FileText, change: "-5%", trend: "down" },
          { title: "Expired Units", value: "12", icon: Clock, change: "+2%", trend: "up" },
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </motion.div>
              </CardHeader>
              <CardContent>
                <motion.div
                  className="text-2xl font-bold text-foreground"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-xs text-muted-foreground">
                  <motion.span
                    className={stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
                  >
                    {stat.change}
                  </motion.span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Blood Group Distribution Chart */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Blood Group Distribution</CardTitle>
              <CardDescription>Current inventory by blood type</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={bloodGroupData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="bloodType" className="text-muted-foreground" fontSize={12} />
                  <YAxis className="text-muted-foreground" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "6px",
                    }}
                  />
                  <Bar dataKey="units" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Request Urgency Pie Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Request Priority Distribution</CardTitle>
              <CardDescription>Breakdown of requests by urgency level</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={urgencyData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {urgencyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "6px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-4">
                {urgencyData.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                  >
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-muted-foreground">
                      {item.name} ({item.value})
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Donation Trends Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="mb-8 hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Donation vs Request Trends</CardTitle>
            <CardDescription>Monthly comparison of donations received and requests fulfilled</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={donationTrendData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="text-muted-foreground" fontSize={12} />
                <YAxis className="text-muted-foreground" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="donations"
                  stackId="1"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.6}
                  name="Donations"
                />
                <Area
                  type="monotone"
                  dataKey="requests"
                  stackId="2"
                  stroke="hsl(var(--secondary))"
                  fill="hsl(var(--secondary))"
                  fillOpacity={0.6}
                  name="Requests"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* Demo Message */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="border-primary/20 bg-primary/5 hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <CheckCircle className="w-6 h-6 text-primary" />
              </motion.div>
              <div>
                <h3 className="font-semibold text-foreground">Demo Dashboard</h3>
                <p className="text-muted-foreground">
                  This is a demonstration of the Blood Bank Management System dashboard. In a real implementation, this
                  would show live data and interactive charts.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  )
}

function DonorsContent() {
  const [donors, setDonors] = useState([
    { id: 1, name: "John Smith", bloodType: "O+", lastDonation: "2024-01-15", phone: "+1 234-567-8901", age: 32 },
    { id: 2, name: "Sarah Johnson", bloodType: "A-", lastDonation: "2024-01-10", phone: "+1 234-567-8902", age: 28 },
    { id: 3, name: "Mike Davis", bloodType: "B+", lastDonation: "2024-01-08", phone: "+1 234-567-8903", age: 35 },
    { id: 4, name: "Emily Wilson", bloodType: "AB+", lastDonation: "2024-01-05", phone: "+1 234-567-8904", age: 29 },
  ])

  const [isAddDonorOpen, setIsAddDonorOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [newDonor, setNewDonor] = useState({
    name: "",
    age: "",
    bloodType: "",
    phone: "",
  })

  const handleAddDonor = async (e: React.FormEvent) => {
    e.preventDefault()
    if (newDonor.name && newDonor.age && newDonor.bloodType && newDonor.phone) {
      setIsSubmitting(true)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const donor = {
        id: donors.length + 1,
        name: newDonor.name,
        bloodType: newDonor.bloodType,
        lastDonation: "Never",
        phone: newDonor.phone,
        age: Number.parseInt(newDonor.age),
      }
      setDonors([...donors, donor])
      setNewDonor({ name: "", age: "", bloodType: "", phone: "" })
      setIsSubmitting(false)
      setIsAddDonorOpen(false)
    }
  }

  return (
    <>
      <motion.div
        className="flex items-center justify-between mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <h1 className="text-3xl font-bold text-foreground">Donor Management</h1>
          <p className="text-muted-foreground">Manage registered donors and their donation history.</p>
        </div>
        <Dialog open={isAddDonorOpen} onOpenChange={setIsAddDonorOpen}>
          <DialogTrigger asChild>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
                <Users className="w-4 h-4" />
                Add New Donor
              </Button>
            </motion.div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <DialogHeader>
                <DialogTitle>Add New Donor</DialogTitle>
                <DialogDescription>
                  Register a new blood donor in the system. All fields are required.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAddDonor} className="space-y-4">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Label htmlFor="donor-name">Full Name</Label>
                  <Input
                    id="donor-name"
                    value={newDonor.name}
                    onChange={(e) => setNewDonor({ ...newDonor, name: e.target.value })}
                    placeholder="Enter full name"
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Label htmlFor="donor-age">Age</Label>
                  <Input
                    id="donor-age"
                    type="number"
                    min="18"
                    max="65"
                    value={newDonor.age}
                    onChange={(e) => setNewDonor({ ...newDonor, age: e.target.value })}
                    placeholder="Enter age"
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Label htmlFor="donor-blood-type">Blood Type</Label>
                  <Select
                    value={newDonor.bloodType}
                    onValueChange={(value) => setNewDonor({ ...newDonor, bloodType: value })}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select blood type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A+">A+</SelectItem>
                      <SelectItem value="A-">A-</SelectItem>
                      <SelectItem value="B+">B+</SelectItem>
                      <SelectItem value="B-">B-</SelectItem>
                      <SelectItem value="AB+">AB+</SelectItem>
                      <SelectItem value="AB-">AB-</SelectItem>
                      <SelectItem value="O+">O+</SelectItem>
                      <SelectItem value="O-">O-</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Label htmlFor="donor-phone">Phone Number</Label>
                  <Input
                    id="donor-phone"
                    type="tel"
                    value={newDonor.phone}
                    onChange={(e) => setNewDonor({ ...newDonor, phone: e.target.value })}
                    placeholder="+1 234-567-8900"
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>
                <motion.div
                  className="flex justify-end gap-3 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsAddDonorOpen(false)}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="mr-2"
                        >
                          <Loader2 className="w-4 h-4" />
                        </motion.div>
                        Adding...
                      </>
                    ) : (
                      "Add Donor"
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </DialogContent>
        </Dialog>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Registered Donors</CardTitle>
            <CardDescription>A list of all registered blood donors in the system.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <AnimatePresence>
                {donors.map((donor, index) => (
                  <motion.div
                    key={donor.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Users className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-foreground">{donor.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {donor.phone} • Age {donor.age}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Badge variant="secondary" className="mb-1">
                          {donor.bloodType}
                        </Badge>
                      </motion.div>
                      <p className="text-sm text-muted-foreground">Last: {donor.lastDonation}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  )
}

function PatientsContent() {
  const [patients, setPatients] = useState([
    { id: 1, name: "Robert Brown", bloodType: "O-", hospital: "City General", urgency: "High" },
    { id: 2, name: "Lisa Anderson", bloodType: "A+", hospital: "Metro Hospital", urgency: "Medium" },
    { id: 3, name: "David Miller", bloodType: "B-", hospital: "Regional Medical", urgency: "Low" },
  ])

  const [isAddPatientOpen, setIsAddPatientOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [newPatient, setNewPatient] = useState({
    name: "",
    bloodType: "",
    hospital: "",
    urgency: "",
  })

  const handleAddPatient = async (e: React.FormEvent) => {
    e.preventDefault()
    if (newPatient.name && newPatient.bloodType && newPatient.hospital && newPatient.urgency) {
      setIsSubmitting(true)
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const patient = {
        id: patients.length + 1,
        name: newPatient.name,
        bloodType: newPatient.bloodType,
        hospital: newPatient.hospital,
        urgency: newPatient.urgency,
      }
      setPatients([...patients, patient])
      setNewPatient({ name: "", bloodType: "", hospital: "", urgency: "" })
      setIsSubmitting(false)
      setIsAddPatientOpen(false)
    }
  }

  return (
    <>
      <motion.div
        className="flex items-center justify-between mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <h1 className="text-3xl font-bold text-foreground">Patient Records</h1>
          <p className="text-muted-foreground">Track patients requiring blood transfusions.</p>
        </div>
        <Dialog open={isAddPatientOpen} onOpenChange={setIsAddPatientOpen}>
          <DialogTrigger asChild>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
                <Users className="w-4 h-4" />
                Add Patient
              </Button>
            </motion.div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <DialogHeader>
                <DialogTitle>Add New Patient</DialogTitle>
                <DialogDescription>
                  Register a new patient requiring blood transfusion. All fields are required.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAddPatient} className="space-y-4">
                {/* Form fields with similar animations as DonorsContent */}
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Label htmlFor="patient-name">Patient Name</Label>
                  <Input
                    id="patient-name"
                    value={newPatient.name}
                    onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
                    placeholder="Enter patient name"
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>
                {/* ... other form fields ... */}
                <motion.div
                  className="flex justify-end gap-3 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsAddPatientOpen(false)}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="mr-2"
                        >
                          <Loader2 className="w-4 h-4" />
                        </motion.div>
                        Adding...
                      </>
                    ) : (
                      "Add Patient"
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </DialogContent>
        </Dialog>
      </motion.div>

      {/* ... existing code with similar animation patterns ... */}
    </>
  )
}

// ... existing code for other components with similar animation enhancements ...

function InventoryContent() {
  const inventory = [
    { bloodType: "O+", units: 45, expiringSoon: 3 },
    { bloodType: "O-", units: 23, expiringSoon: 1 },
    { bloodType: "A+", units: 38, expiringSoon: 2 },
    { bloodType: "A-", units: 19, expiringSoon: 0 },
    { bloodType: "B+", units: 31, expiringSoon: 4 },
    { bloodType: "B-", units: 12, expiringSoon: 1 },
    { bloodType: "AB+", units: 8, expiringSoon: 0 },
    { bloodType: "AB-", units: 5, expiringSoon: 1 },
  ]

  return (
    <>
      <motion.div
        className="flex items-center justify-between mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <h1 className="text-3xl font-bold text-foreground">Blood Inventory</h1>
          <p className="text-muted-foreground">Monitor blood stock levels and expiration dates.</p>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
            <Package className="w-4 h-4" />
            Update Inventory
          </Button>
        </motion.div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {inventory.map((item, index) => (
          <motion.div
            key={item.bloodType}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -8, scale: 1.05 }}
          >
            <Card className="hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <CardHeader className="text-center">
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Package className="w-8 h-8 text-primary" />
                </motion.div>
                <CardTitle className="text-2xl">{item.bloodType}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <motion.div
                  className="text-3xl font-bold text-foreground mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 + 0.2 }}
                >
                  {item.units}
                </motion.div>
                <p className="text-sm text-muted-foreground">Units Available</p>
                {item.expiringSoon > 0 && (
                  <motion.p
                    className="text-sm text-red-600 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 + 0.4 }}
                  >
                    {item.expiringSoon} expiring soon
                  </motion.p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  )
}

function RequestsContent() {
  const [requests, setRequests] = useState([
    { id: 1, hospital: "City General", bloodType: "O-", units: 5, urgency: "Critical", time: "2 hours ago" },
    { id: 2, hospital: "Metro Hospital", bloodType: "A+", units: 3, urgency: "High", time: "4 hours ago" },
    { id: 3, hospital: "Regional Medical", bloodType: "B+", units: 2, urgency: "Medium", time: "6 hours ago" },
  ])

  const [isNewRequestOpen, setIsNewRequestOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [newRequest, setNewRequest] = useState({
    hospital: "",
    bloodType: "",
    units: "",
    urgency: "",
    notes: "",
  })

  const handleNewRequest = async (e: React.FormEvent) => {
    e.preventDefault()
    if (newRequest.hospital && newRequest.bloodType && newRequest.units && newRequest.urgency) {
      setIsSubmitting(true)
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const request = {
        id: requests.length + 1,
        hospital: newRequest.hospital,
        bloodType: newRequest.bloodType,
        units: Number.parseInt(newRequest.units),
        urgency: newRequest.urgency,
        time: "Just now",
      }
      setRequests([request, ...requests])
      setNewRequest({ hospital: "", bloodType: "", units: "", urgency: "", notes: "" })
      setIsSubmitting(false)
      setIsNewRequestOpen(false)
    }
  }

  return (
    <>
      <motion.div
        className="flex items-center justify-between mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <h1 className="text-3xl font-bold text-foreground">Blood Requests</h1>
          <p className="text-muted-foreground">Manage incoming blood requests from hospitals.</p>
        </div>
        <Dialog open={isNewRequestOpen} onOpenChange={setIsNewRequestOpen}>
          <DialogTrigger asChild>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
                <FileText className="w-4 h-4" />
                New Request
              </Button>
            </motion.div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">{/* Similar form structure with animations */}</DialogContent>
        </Dialog>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Pending Requests</CardTitle>
            <CardDescription>Blood requests awaiting fulfillment.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <AnimatePresence>
                {requests.map((request, index) => (
                  <motion.div
                    key={request.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <FileText className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-foreground">{request.hospital}</h3>
                        <p className="text-sm text-muted-foreground">{request.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg font-semibold text-foreground">{request.units} units</span>
                        <motion.div whileHover={{ scale: 1.05 }}>
                          <Badge variant="secondary">{request.bloodType}</Badge>
                        </motion.div>
                      </div>
                      <motion.p
                        className={`text-sm ${
                          request.urgency === "Critical"
                            ? "text-red-600"
                            : request.urgency === "High"
                              ? "text-orange-600"
                              : "text-yellow-600"
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {request.urgency}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  )
}

function RewardsContent() {
  const topDonors = [
    { name: "John Smith", donations: 24, points: 2400, badge: "Gold" },
    { name: "Sarah Johnson", donations: 18, points: 1800, badge: "Silver" },
    { name: "Mike Davis", donations: 12, points: 1200, badge: "Bronze" },
  ]

  return (
    <>
      <motion.div
        className="flex items-center justify-between mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <h1 className="text-3xl font-bold text-foreground">Donor Rewards</h1>
          <p className="text-muted-foreground">Recognition and rewards for our valued donors.</p>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
            <Award className="w-4 h-4" />
            Manage Rewards
          </Button>
        </motion.div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Top Donors This Year</CardTitle>
              <CardDescription>Our most dedicated blood donors.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topDonors.map((donor, index) => (
                  <motion.div
                    key={donor.name}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                  >
                    <motion.div
                      className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      {index + 1}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{donor.name}</h3>
                      <p className="text-sm text-muted-foreground">{donor.donations} donations</p>
                    </div>
                    <div className="text-right">
                      <motion.div
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                          donor.badge === "Gold"
                            ? "bg-yellow-100 text-yellow-800"
                            : donor.badge === "Silver"
                              ? "bg-gray-100 text-gray-800"
                              : "bg-orange-100 text-orange-800"
                        }`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Award className="w-3 h-3" />
                        {donor.badge}
                      </motion.div>
                      <p className="text-sm text-muted-foreground mt-1">{donor.points} pts</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Reward Programs</CardTitle>
              <CardDescription>Available rewards and recognition programs.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Milestone Badges",
                    description: "Earn badges for donation milestones: Bronze (5+), Silver (15+), Gold (25+)",
                  },
                  {
                    title: "Points System",
                    description: "Earn 100 points per donation, redeem for health checkups and gifts",
                  },
                  {
                    title: "Annual Recognition",
                    description: "Top donors receive certificates and special recognition events",
                  },
                ].map((program, index) => (
                  <motion.div
                    key={program.title}
                    className="p-4 border border-border rounded-lg hover:border-primary/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <h3 className="font-semibold text-foreground mb-2">{program.title}</h3>
                    <p className="text-sm text-muted-foreground">{program.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </>
  )
}
