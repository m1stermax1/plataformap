import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Instagram, AtSign, Twitter, Facebook } from "lucide-react"



export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <span className="text-xl">Unión Liberal San Isidro</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#inicio" className="text-sm font-medium transition-colors hover:text-primary">
              Inicio
            </Link>
            <Link href="#candidato" className="text-sm font-medium transition-colors hover:text-primary">
              Candidatos
            </Link>
            {/* <Link href="#temas" className="text-sm font-medium transition-colors hover:text-primary">
              Temas
            </Link>
            <Link href="#proyectos" className="text-sm font-medium transition-colors hover:text-primary">
              Proyectos
            </Link> */}
          </nav>
          <Button>
            <Link href="#suma" className="text-sm font-medium transition-colors hover:text-primary">
              Contacto
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section id="inicio" className="grid w-full bg-muted">
          <Image
            src="/concejo2.jpg"
            width={400}
            height={300}
            alt="background del concejo"
            className="object-cover w-full"
            style={{ gridArea: "1/1", height: "710px", zIndex: 0 }}
          />
          <div style={{ gridArea: "1/1",backgroundColor: "hsl(232.02deg 94% 39.22% / 74%)", zIndex: 1 }}></div>
          <div className="container px-4 md:px-6 md:py-24 lg:py-30"  style={{ gridArea: "1/1", zIndex: 2 }}>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-white text-black font-medium px-3 py-1 text-sm ">
                  Elecciones Legislativas 2025
                </div>
                <h1 className="text-white text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  No somos oposición. Somos una mejor opción.
                </h1>
                <p className="max-w-[600px] text-white md:text-xl">
                  Llevemos las ideas liberales al Concejo Deliberante y construyamos un San Isidro para los Sanisidrenses.
                </p>
                {/* <div className="flex flex-col gap-2 min-[500px]:flex-row">
                  <Button size="lg" className="bg-white text-black font-medium">
                    <Link href="#proyectos">Conoce nuestras propuestas</Link>
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div> */}
              </div>
              <div className="mx-auto lg:order-last">
                <Image
                  src="/unionliberal.png"
                  width={450}
                  height={550}
                  alt="Imagen de campaña"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Candidate Section */}
        <section id="candidato" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto">
                <Image
                  src="/franPerfil.png?height=500&width=400"
                  width={400}
                  height={500}
                  alt="Foto del candidato"
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Francisco Sicardi de Estrada</h2>
                <p className="text-xl font-medium text-primary">Candidato a concejal por Unión Liberal ex UCEDE</p>
                <p className="text-muted-foreground">
                  Forma parte del mismo partido desde hace 30 años. Liberal en lo económico, conservador en los valores. Defensor de la República y de la Familia.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                    <span>Abogado</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                    <span>Especialista en Políticas Públicas</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                    <span>Fundador de la ONG Themis Observa</span>
                  </li>
                </ul>
                {/* <Button>
                  Conoce más sobre Francisco
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button> */}
              </div>
            </div>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Roxana Laura Marga</h2>
                <p className="text-xl font-medium text-primary">Candidata a Concejal por Unión Liberal ex UCEDE</p>
                <p className="text-muted-foreground">
                  A través de la Fundación Accionarte capacitan y apoyan a emprendedores. <br />
                  Tiene una destacada trayectoria en la lucha de la violencia de género,el abuso y maltrato infantil y las Adicciones.<br />
                  Promoviendo el bienestar y la educación.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                    <span>Psicopedagoga</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                    <span>Directora de la Fundación Accionarte</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                    <span>Productora de radio</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                    <span>Escritora</span>
                  </li>
                </ul>
              </div>
              <div className="mx-auto">
                <Image
                  src="/roxanaPerfil.png?height=500&width=400"
                  width={400}
                  height={500}
                  alt="Foto del candidato"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        Topics Section
        <section id="temas" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
   
                <h2 className="text-white text-3xl font-bold tracking-tighter sm:text-5xl">Pilares de Nuestra Plataforma</h2>
                <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estos son los cuatro ejes fundamentales que guían nuestras propuestas y proyectos para transformar
                  nuestra comunidad.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
              <Card>
                <CardHeader className="pb-2">
                  {/* <Users className="h-12 w-12 text-primary mb-2" /> */}
                  <CardTitle>Economía</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Queremos reducir la cargar impositiva para todos los vecinos y premiar aquellos que son cumplidores.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  {/* <Building className="h-12 w-12 text-primary mb-2" /> */}
                  <CardTitle>Salud</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    La Salud debe ser primero para los Sanisidrenses y de forma rápida.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  {/* <Scale className="h-12 w-12 text-primary mb-2" /> */}
                  <CardTitle>Seguridad</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Aumentar el equipamiento de prevención con cámaras y postas policiales en zonas de alto delito.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  {/* <Landmark className="h-12 w-12 text-primary mb-2" /> */}
                  <CardTitle>Transparencia</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Los contribuyentes debemos saber en qué se gastan la plata que se recauda.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="proyectos" className="w-full py-12 md:py-24 lg:py-32 hidden">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Proyectos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nuestros Proyectos Prioritarios</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Iniciativas concretas que implementaremos para transformar nuestra comunidad y mejorar la calidad de
                  vida de todos los ciudadanos.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Reforma Educativa Integral</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/educacionjpg.webp?height=200&width=350"
                    width={350}
                    height={200}
                    alt="Imagen de proyecto educativo"
                    className="rounded-lg object-cover mb-4"
                  />
                  <CardDescription>
                    Modernización del sistema educativo con enfoque en habilidades digitales, pensamiento crítico y
                    preparación para los empleos del futuro.
                  </CardDescription>
                  {/* <Button variant="outline" className="w-full mt-4">
                    Ver detalles
                  </Button> */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Plan de Infraestructura Verde</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/infraverde.jpeg?height=200&width=350"
                    width={350}
                    height={200}
                    alt="Imagen de proyecto de infraestructura"
                    className="rounded-lg object-cover mb-4"
                  />
                  <CardDescription>
                    Desarrollo de espacios públicos sostenibles, transporte limpio y edificios energéticamente
                    eficientes para una ciudad más habitable.
                  </CardDescription>
                  {/* <Button variant="outline" className="w-full mt-4">
                    Ver detalles
                  </Button> */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Digitalización de Servicios Públicos</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/concejo.jpeg?height=200&width=350"
                    width={350}
                    height={200}
                    alt="Imagen de proyecto de digitalización"
                    className="rounded-lg object-cover mb-4"
                  />
                  <CardDescription>
                    Implementación de plataformas digitales para agilizar trámites, reducir burocracia y facilitar el
                    acceso a servicios gubernamentales.
                  </CardDescription>
                  {/* <Button variant="outline" className="w-full mt-4">
                    Ver detalles
                  </Button> */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Programa de Salud Comunitaria</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/hospital_boulogne_0.jpg?height=200&width=350"
                    width={350}
                    height={200}
                    alt="Imagen de proyecto de salud"
                    className="rounded-lg object-cover mb-4"
                  />
                  <CardDescription>
                    Red de centros de atención primaria con enfoque preventivo y acceso universal a servicios médicos
                    básicos en todas las comunidades.
                  </CardDescription>
                  {/* <Button variant="outline" className="w-full mt-4">
                    Ver detalles
                  </Button> */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Incubadora de Emprendimientos</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/local.webp?height=200&width=350"
                    width={350}
                    height={200}
                    alt="Imagen de proyecto de emprendimiento"
                    className="rounded-lg object-cover mb-4"
                  />
                  <CardDescription>
                    Apoyo integral a nuevos negocios con financiamiento, mentoría y espacios de trabajo colaborativo
                    para impulsar la economía local.
                  </CardDescription>
                  {/* <Button variant="outline" className="w-full mt-4">
                    Ver detalles
                  </Button> */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sistema de Participación Ciudadana</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/participacionciudadana.webp?height=200&width=350"
                    width={350}
                    height={200}
                    alt="Imagen de proyecto de participación"
                    className="rounded-lg object-cover mb-4"
                  />
                  <CardDescription>
                    Plataforma para que los ciudadanos propongan, voten y monitoreen proyectos comunitarios con
                    presupuesto participativo.
                  </CardDescription>
                  {/* <Button variant="outline" className="w-full mt-4">
                    Ver detalles
                  </Button> */}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="suma" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sumá tus ideas</h2>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Sé parte del cambio que nuestra comunidad necesita. <br />
                  Comunícate a través de nuestras redes sociales.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary">
                  <Facebook></Facebook><Link href="https://www.facebook.com/unionliberalsi" target="_blank">Facebook</Link>
                </Button>
                <Button size="lg" variant="secondary">
                  <Instagram></Instagram><Link href="https://www.instagram.com/ulsanisidro/" target="_blank">Instagram</Link>
                </Button>
                <Button size="lg" variant="secondary">
                  <AtSign></AtSign><Link href="https://www.tiktok.com/@unionliberalsanisidro" target="_blank">TikTok</Link>
                </Button>
                <Button size="lg" variant="secondary">
                  <Twitter></Twitter> <Link href="https://x.com/ulsanisidro" target="_blank">X</Link>
                </Button>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Donar a la campaña
                </Button> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © Unión Liberal San Isidro.
          </p>
        </div>
      </footer>
    </div>
  )
}

