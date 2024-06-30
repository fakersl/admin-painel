import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

// Hook customizado para o dispatch com tipagem correta
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Hook customizado para o selector com tipagem correta
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
