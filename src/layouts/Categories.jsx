import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function Categories() {
    return (
        <div>
            <Menu vertical pointing>
                <Menu.Item>
                    <Menu.Header>Digital Content & Devices</Menu.Header>

                    <Menu.Menu>
                        <Link to="/"><Menu.Item
                            name='Cart List'
                        /></Link>
                        <Menu.Item
                            name='JS'
                        />
                        <Link to="/product/Add"><Menu.Item
                            name='Product Add'
                        /></Link>
                        <Menu.Item
                            name='c#'
                        />
                        <Link to="/products"><Menu.Item
                            name='Product List'
                        /></Link>
                        <Menu.Item
                            name='C'
                        />
                        <Menu.Item
                            name='C++'
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Shop By Department</Menu.Header>

                    <Menu.Menu>
                        <Link to="/"><Menu.Item
                            name='Electronics'
                        /></Link>
                        <Menu.Item
                            name='Computers'
                        />
                        <Menu.Item
                            name='Smart Home'
                        />
                        <Menu.Item
                            name='Arts & Crafts'
                        />
                        <Menu.Item
                            name='Baby'
                        />
                        <Menu.Item
                            name='Toys and Games'
                        />
                        <Menu.Item
                            name='Software'
                        />
                        <Menu.Item
                            name='Movies & Television'
                        />
                        <Menu.Item
                            name='Pet Supplies'
                        />
                        <Menu.Item
                            name='Sports and Outdoors'
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Programs & Features</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item
                            name='shared'
                        />
                        <Menu.Item
                            name='dedicated'
                        />
                        <Menu.Item
                            name='shared'
                        />
                        <Menu.Item
                            name='dedicated'
                        />
                        <Menu.Item
                            name='shared'
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Support</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item
                            name='email'
                        >
                            E-mail Support
                        </Menu.Item>

                        <Menu.Item
                            name='faq'
                        >
                            FAQs
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        </div>
    )
}
