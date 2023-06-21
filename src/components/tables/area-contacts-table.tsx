import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import editIcon from "../../assets/pencil.svg"
import { customModalStyles } from "../../styles/modal-style";
import { Button } from "../buttons/button-primary";
import { SecundaryButton } from "../buttons/button-secundary";
import { Input } from "../input";
import { Divider } from "../utils/divider";
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from "../../services/axios";

interface IAreaContact {
    id?: number;
    name: string;
    email: string;
}

interface IAreaContactProps {
    contacts: IAreaContact[];
}

export function AreaContactsTable({ contacts }: IAreaContactProps) {

    const [currentEditContact, setCurrentEditContact] = useState<IAreaContact>()

    const [modalIsOpen, setIsOpen] = useState(false);

    const successNotification = () => toast("Contato editado com sucesso!");

    const errorNotification = () => toast.error("Erro na edição do contato.");

    function handleOpenEditContactModal(contact: IAreaContact) {
        setIsOpen(true);
        setCurrentEditContact(contact)
    }


    function handleCloseModal() {
        setIsOpen(false);
    }

    async function handleEditContact() {
        console.log(currentEditContact)
        await api
            .put("/areacontact/update", {
                currentEditContact
            })
            .then((response) => {
                successNotification()
                handleCloseModal()
                window.location.reload();
            })
            .catch((err) => {
                errorNotification()
                handleCloseModal()
            });
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs text-gray-700 font-extrabold uppercase tracking-wider"
                        >
                            Id
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs text-gray-700 font-extrabold uppercase tracking-wider"
                        >
                            Nome
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs text-gray-700 font-extrabold uppercase tracking-wider"
                        >
                            E-mail
                        </th>

                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs text-gray-700 font-extrabold uppercase tracking-wider"
                        >

                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">

                    {contacts.map(contact => {
                        return (
                            <tr key={contact.id} className="hover:bg-slate-100">
                                <td className="px-6 py-4 whitespace-nowrap">{contact.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{contact.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{contact.email}</td>
                                <td className="px-4 py-4 flex justify-end">
                                    <img
                                        onClick={() => {
                                            handleOpenEditContactModal(contact)
                                        }}
                                        className="cursor-pointer" src={editIcon} alt="Edit icon" />
                                </td>
                            </tr>
                        )
                    })}



                </tbody>
            </table>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                style={customModalStyles}
                contentLabel="Area contact modal"
            >
                <div className="w-96">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl mb-2 font-semibold">Editar contato</h2>
                        <span className="cursor-pointer hover:text-red-800" onClick={handleCloseModal}>
                            <AiOutlineClose />
                        </span>
                    </div>
                    <Divider />
                    <div className="mt-4 mb-12 md:grid grid-cols-2 gap-10 items-center">
                        <Input
                            label="Nome"
                            defaultValue={currentEditContact?.name}
                        />
                        <Input
                            label="E-mail"
                            defaultValue={currentEditContact?.email}
                        />

                    </div>
                    <Divider />
                    <div className="flex justify-between items-center mt-6 w-full">

                        <SecundaryButton
                            type="button"
                            text="Cancelar"
                            onClick={handleCloseModal}
                        />
                        <Button
                            type="button"
                            text="Salvar"
                            onClick={handleEditContact}
                        />
                    </div>
                </div>

            </Modal>
            <ToastContainer />
        </div>
    )
}