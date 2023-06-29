"use client"
import { SetStateAction, useState } from "react";
import { Grid, Paper } from "@mui/material";
import InputText from "./components/inputText";
import ButtonSearch from "./components/button";

export default function Home() {

  const [inputValue, setInputValue] = useState('')
  const [display, setDisplay] = useState(false)


  return (
    <>
      <Grid container direction={"row"} spacing={1}>
        <Grid item >
          <InputText
            label='Campo de texto'
            placeholder='Insira sua mensagem'
            value={inputValue}
            name={'message'}
            onChange={(event: { target: { value: SetStateAction<string> } }) => setInputValue(event.target.value)}
          />
        </Grid>
        <Grid item>
          <ButtonSearch
            variant="contained"
            color="secondary"
            size="medium"
            onClick={() =>
              setDisplay(!display)
            }
          />
        </Grid>
      </Grid>
      <Paper>
        {display && (
          inputValue
        )}
      </Paper>
    </>
  )
}
