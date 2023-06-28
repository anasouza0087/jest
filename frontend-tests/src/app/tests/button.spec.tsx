import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import ButtonSearch from "../components/button"

describe('Button tests suits', () => {
    //jest.fn() mocka uma função para disparar o evento de clique.
    const eventClick = jest.fn()
    
    //mock do elemento com as props necessárias.
    const mockComponent = (
        <ButtonSearch
            variant="contained"
            color="secondary"
            size="medium"
            onClick={eventClick}
        />
    )
    it('Should render button component', () => {
        //função render() renderiza o elemento em tela.
        render(mockComponent)
    })

    it('Should check button title', () => {
        render(mockComponent)
        //apór renderizar o elemento em tela, o objeto screen irá armazenar a "DOM virtual".
        //função expect() executa a validação desejada.
        expect(screen.getByText('Ação')).toBeInTheDocument()
    })
    it('Should click the button and check title change', () => {
        render(mockComponent)
        const button = screen.getByRole('button')
        //função fireEvent simula uma ação manual em tela, seja clique ou alteração de valores em tela.
        fireEvent.click(button)
        expect(eventClick).toBeCalled()
        expect(screen.getByText('Buscando'))
    })
})