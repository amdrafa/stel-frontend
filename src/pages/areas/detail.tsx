import { toast } from "react-toastify";
import { DeleteButton } from "../../components/buttons/button-delete";
import { Button } from "../../components/buttons/button-primary";
import { SecundaryButton } from "../../components/buttons/button-secundary";
import { Error404 } from "../../components/error-404";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { AreaContactsTable } from "../../components/tables/area-contacts-table";
import { api } from "../../services/axios";
// import { useParams } from "react-router-dom";


export function AreasDetail() {

  // const { id } = useParams()

  const editAreaSuccessNotification = () => toast("Área editada com sucesso!");

  const editAreaErrorNotification = () => toast.error("Erro na edição da área.");

  const deleteAreaSuccessNotification = () => toast("Área deletada com sucesso!");

  const deleteAreaErrorNotification = () => toast.error("Erro no momento de excluir área.");

  async function handleDeleteArea() {
    await api
      .post("/areas/contact")
      .then((response) => {
        deleteAreaSuccessNotification()
      })
      .catch((err) => {
        deleteAreaErrorNotification()
      });
  }



  const contactFakeData = [
    {
      id: 1,
      name: "Zezinho",
      email: "ze@test.com"
    },
    {
      id: 2,
      name: "Carlos",
      email: "ze@test.com"
    },
    {
      id: 3,
      name: "Gabriel",
      email: "ze@test.com"
    }
  ]



  const user = true

  return (
    <>
      <Header />
      {user ? (
        <main className="p-10">
          <div className="flex justify-between items-center mb-8 p-4">
            <h1 className="text-3xl font-bold">
              Editar área
            </h1>
            <DeleteButton
              text="Excluir área"
              type="button"
              onClick={handleDeleteArea}
            />
          </div>

          <div className="bg-white p-6">
            <div className=" md:grid grid-cols-2 gap-10 items-center">
              <Input
                label="Nome"
                defaultValue="Área teste - 01"
              />
              <Input
                label="Descrição"
                defaultValue="Descrição teste - 01"
              />
              <Input
                label="Data de atualização"
                disabled
                defaultValue="19 de Junho de 2023"
              />
              <Input
                label="Responsável pela atualização"
                disabled
                defaultValue="Rafael Amaro Moreira (moa2jvl)"
              />
            </div>

            <div className="mt-12 mb-10">

              <AreaContactsTable
                contacts={contactFakeData}
              />

            </div>

            <div className="flex justify-between items-center mt-12">
              <SecundaryButton
                text="Cancelar"
              />
              <Button
                text="Salvar"
                onClick={() => {
                  editAreaSuccessNotification()
                }}
              />
            </div>
          </div>

        </main>
      ) : (
        <Error404 />
      )}


    </>
  )
}