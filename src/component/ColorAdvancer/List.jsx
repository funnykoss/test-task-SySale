const List = ({colors}) => {
    return (
        <>
            <ul>
                {colors.map(({ id, color }) => (
                    <li key={id}>
                        {color}
                    </li>

                ))}
        </ul>
        </>
    )
}
export default List 