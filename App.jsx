
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function BancoTiempo() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [habilidades, setHabilidades] = useState("");
  const [servicios, setServicios] = useState("");
  const [mensajes, setMensajes] = useState([]);
  const [nuevoMensaje, setNuevoMensaje] = useState("");

  const handleEnviar = () => {
    if (nuevoMensaje.trim() !== "") {
      setMensajes([...mensajes, { texto: nuevoMensaje, autor: "tú" }]);
      setNuevoMensaje("");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-blue-800">
          Banco del Tiempo Universitario
        </h1>
        <p className="italic text-gray-600">
          "Tiempo por Aprendizaje, Aprendizaje por Tiempo"
        </p>
      </header>

      <Tabs defaultValue="inscripcion" className="space-y-4">
        <TabsList className="flex justify-center gap-2 flex-wrap">
          <TabsTrigger value="inscripcion">Formulario</TabsTrigger>
          <TabsTrigger value="actividades">Actividades</TabsTrigger>
          <TabsTrigger value="chat">Chat</TabsTrigger>
        </TabsList>

        <TabsContent value="inscripcion">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <Input
                placeholder="Nombre completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <Input
                type="email"
                placeholder="Correo electrónico"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
              <Textarea
                placeholder="¿Qué puedes ofrecer?"
                value={habilidades}
                onChange={(e) => setHabilidades(e.target.value)}
              />
              <Textarea
                placeholder="¿Qué servicios te gustaría recibir?"
                value={servicios}
                onChange={(e) => setServicios(e.target.value)}
              />
              <Button className="w-full">Enviar inscripción</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="actividades">
          <div className="grid md:grid-cols-3 gap-4">
            {["Tutoría de Matemáticas", "Clases de Inglés", "Yoga", "Revisión de CV", "Fotografía", "Redacción académica"].map((actividad, i) => (
              <Card key={i} className="hover:shadow-md">
                <CardContent className="p-4 text-center space-y-2">
                  <h3 className="text-lg font-bold text-blue-700">{actividad}</h3>
                  <p className="text-sm text-gray-500">1 Crédito</p>
                  <Button>Canjear</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="chat">
          <Card>
            <CardContent className="space-y-4 pt-4">
              <div className="h-60 overflow-y-auto border rounded p-3 space-y-2">
                {mensajes.map((m, i) => (
                  <div key={i} className={`text-sm p-2 rounded ${m.autor === "tú" ? "bg-blue-100 text-right" : "bg-gray-100"}`}>
                    {m.texto}
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Escribe un mensaje..."
                  value={nuevoMensaje}
                  onChange={(e) => setNuevoMensaje(e.target.value)}
                />
                <Button onClick={handleEnviar}>Enviar</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <footer className="text-center text-sm text-gray-400 pt-10">
        &copy; 2025 Banco del Tiempo Universitario – UCLM
      </footer>
    </div>
  );
}
