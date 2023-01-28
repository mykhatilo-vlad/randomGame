const ListItem = ({index, game, className}) => {
    return <li
        style= {{'--delay': index * 100 + 'ms'}}
        className={className}
    >
        {game}
    </li>
}

export default ListItem