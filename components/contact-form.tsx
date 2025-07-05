"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { Loader2, Mail, Phone, User, MapPin } from "lucide-react"

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    localidad: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success("¡Mensaje enviado!", {
          description: "Gracias por contactarnos. Te responderemos pronto.",
        })

        // Limpiar el formulario
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          localidad: "",
        })
      } else {
        throw new Error("Error al enviar el mensaje")
      }
    } catch (error) {
      toast.error("Error", {
        description: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="nombre" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Nombre completo
            </Label>
            <Input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Ingresa tu nombre completo"
              value={formData.nombre}
              onChange={handleInputChange}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefono" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Teléfono
            </Label>
            <Input
              id="telefono"
              name="telefono"
              type="tel"
              placeholder="+54 9 11 1234-5678"
              value={formData.telefono}
              onChange={handleInputChange}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="localidad" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Localidad
            </Label>
            <Input
              id="localidad"
              name="localidad"
              type="text"
              placeholder="Ciudad, Provincia"
              value={formData.localidad}
              onChange={handleInputChange}
              required
              className="w-full"
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Mail className="mr-2 h-4 w-4" />
                Enviar
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
