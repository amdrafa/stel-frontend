export function Error404(){
    return (
        <main className="p-10">

        <div className="flex justify-between items-center mb-8 p-4">
            <h1 className="text-3xl font-bold">
                Nenhum usuário localizado.
            </h1>
        </div>

        <div className="bg-white p-32 flex justify-center text-2xl font-semibold">
        404 - Pasta ou diretório não localizado.
        </div>

    </main>
    )
}