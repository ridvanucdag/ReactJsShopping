import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SingnedOut({ signIn }) {
    return (
        <div>
            <Menu.Item>
                <Button inverted color='blue' style={{ marginRight: 5 }} onClick={signIn}>
                    Giriş Yap
                </Button>
                <Button inverted color='blue'>
                    Kayıt Ol
                </Button>
            </Menu.Item>

        </div >
    )
}
