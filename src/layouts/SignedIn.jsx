import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="rigth" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"></Image>
               
                <Dropdown pointing="top left" text="Merve">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out" />
                    </Dropdown.Menu>               
                </Dropdown>

            </Menu.Item>
        </div>
    )
}
