
export function NoteRemove({ note, onRemove }) {

    return (
        <section className="note-remove">
            {pets.map(pet => {
                return <onRemove key={note.id} note={note} onRemove={onRemove} />;

            })
            }
        </section>
    );
}