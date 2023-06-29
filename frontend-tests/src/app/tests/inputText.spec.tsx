import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import InputText from "../components/inputText";
import '@testing-library/jest-dom'

describe('Input text suite tests', () => {
    const onChange = jest.fn()
    const mockComponent = (
        <InputText
            label={'Mensagem'}
            placeholder={"Insira sua mensagem"}
            value={''}
            name={'message'}
            onChange={onChange}
        />
    )
    it('should render the input element', () => {
        render(mockComponent)
        const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument()
    })
    it('should check placeholder and label from input', () => {
        render(mockComponent)
        const inputPlaceHolder = screen.getByPlaceholderText('Insira sua mensagem')
        const inputLabel = screen.getByLabelText('Mensagem')
        expect(inputPlaceHolder).toBeInTheDocument()
        expect(inputLabel).toBeInTheDocument()
    })
    it('should check value and trigger onChange function', async () => {
        render(mockComponent)
        const input = screen.getByRole('textbox') as HTMLInputElement
        expect(input).toBeInTheDocument()
        fireEvent.change(input, { target: { value: 'new message test' } })
        expect(onChange).toHaveBeenCalled()
        // expect(input.value).toBe('new message test')
    })
})