import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_APY_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nombre, email, telefono, localidad } = body

    // Validar que todos los campos estén presentes
    if (!nombre || !email || !telefono || !localidad) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
    }

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: "Formulario de Contacto <onboarding@resend.dev>",
      to: ["maxipompas@gmail.com"],
      subject: `Nuevo contacto de ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Nuevo mensaje del formulario de contacto
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Información del contacto:</h3>
            
            <p style="margin: 10px 0;"><strong>Nombre:</strong> ${nombre}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Teléfono:</strong> ${telefono}</p>
            <p style="margin: 10px 0;"><strong>Localidad:</strong> ${localidad}</p>
          </div>
          
          <div style="background-color: #e9ecef; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              Este mensaje fue enviado desde el formulario de contacto de tu sitio web.
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Error enviando email:", error)
      return NextResponse.json({ error: "Error al enviar el email" }, { status: 500 })
    }

    return NextResponse.json({ message: "Email enviado correctamente", data }, { status: 200 })
  } catch (error) {
    console.error("Error en API route:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
