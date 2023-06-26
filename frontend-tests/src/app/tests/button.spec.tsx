import { render } from "@testing-library/react"
import ButtonSearch from "../components/button"

describe('Button tests suits', () => {
    const mockComponent = (
        <ButtonSearch
            title="Ação"
            variant="contained"
            color="secondary"
            size="medium"
            onClick={() => null}
        />
    )
    it('Should render button component', () => {
        render(mockComponent)
    })
})