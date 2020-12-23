
export function NoteRemove({ note, onRemove }) {

    return (
        <section className="note-remove">
            {pets.map(pet => {
                return <PetPreview key={pet.id} pet={pet} onRemove={onRemove} />;

            })
            }
        </section>
    );
}