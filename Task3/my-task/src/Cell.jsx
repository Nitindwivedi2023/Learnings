const Cell = ({x, y, position}) => {
    if (x==3 && y==3 || x==1 && y==1 ){
        return <div className="grid-cell wall"></div>
    }
    if (position.x == x && position.y == y) {
        return <div className="grid-cell image"></div>
    }
    return <div className="grid-cell"></div>
}

export default Cell;