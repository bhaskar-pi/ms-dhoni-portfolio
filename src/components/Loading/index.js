import { Puff } from "react-loader-spinner"

const Loading = () => {
    return(
        <Puff
            visible={true}
            height="80"
            width="80"
            color='#C0A106'
            ariaLabel="puff-loading"
        />
    )
}

export default Loading