import { MenuProps, Menu } from "antd"
import { PlusSquareOutlined, HighlightOutlined, ClockCircleOutlined} from '@ant-design/icons'


const items: MenuProps['items'] = [
    {
        label: 'Simple React Form',
        key: 'title',
        icon: <PlusSquareOutlined />,
    },
    {
        label: 'Adri Antori',
        key: 'author',
        icon: <HighlightOutlined />,
    },
    {
        label: 'RevoU Week 12',
        key: 'class',
        icon: <ClockCircleOutlined />,
    }
]

const Navbar = () => {

    return (
        <Menu mode="horizontal" items={items}/>
    )
}

export default Navbar