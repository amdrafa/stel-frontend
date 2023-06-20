// import { useParams } from "react-router-dom";
import { useState } from "react";
import { DeleteButton } from "../../components/buttons/button-delete";
import { Button } from "../../components/buttons/button-primary";
import { SecundaryButton } from "../../components/buttons/button-secundary";
import { Error404 } from "../../components/error-404";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { AreaContactsTable } from "../../components/tables/area-contacts-table";
import Modal from 'react-modal';
import { customModalStyles } from "../../styles/modal-style";

export function AreasDetail() {

    // const { id } = useParams()

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    
    const user = true

    return (
        <>
            <Header />
            {user ? (
                <main className="p-10">

<button onClick={openModal}>Open Modal</button>

                <div className="flex justify-between items-center mb-8 p-4">
                    <h1 className="text-3xl font-bold">
                        Editar área
                    </h1>
                    <DeleteButton
                        text="Excluir área"
                    />
                </div>

                <div className="bg-white p-6">
                <div className=" md:grid grid-cols-2 gap-10 items-center">
                    <Input 
                    label="Nome"
                    value="Área teste - 01"
                    />
                    <Input 
                    label="Descrição"
                    value="Descrição teste - 01"
                    />
                    <Input 
                    label="Data de atualização"
                    disabled
                    value="19 de Junho de 2023"
                    />
                    <Input 
                    label="Responsável pela atualização"
                    disabled
                    value="Rafael Amaro Moreira (moa2jvl)"
                    />
                </div>

                <div className="mt-12 mb-10">

                <AreaContactsTable />
                
                </div>

                <div className="flex justify-between items-center mt-12">
                    <SecundaryButton 
                    text="Cancelar"
                    />
                    <Button 
                    text="Salvar"
                    />
                </div>
                </div>

            </main>
            ) : (
               <Error404 />
            )}

<Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
        contentLabel="Area contact modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigatiotab navigationtab navigationn</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
        </>
    )
}