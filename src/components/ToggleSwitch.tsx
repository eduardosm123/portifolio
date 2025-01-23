import * as React from 'react';
import { 
    FormGroup,
    FormControlLabel,
    Switch
} from "@mui/material";
 
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../redux/store.ts"
import { toggleTheme } from '../redux/reducer/themeSlice.ts';

export default function ToggleSwitch() {
    const theme = useSelector((state: RootState) => state.theme.darkMode)
    const dispatch = useDispatch();

    return (
        <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={theme}
              onChange={() => dispatch(toggleTheme())}
            />
          }
          label="Tema"
        />
      </FormGroup>
    )
}