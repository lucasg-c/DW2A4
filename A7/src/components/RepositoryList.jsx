const repositoryName = {
    name: "Atividade",
    description: "Descrição da Atividade",
    link: "link"
}

export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                < RepostoryItem repository={repository} />
            </ul>
        </section>
    )
}