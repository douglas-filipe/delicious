import Lottie from "react-lottie"
import { useState } from "react"
import like from '../../assets/animations/like/like.json'
import { Container } from "./style"

interface likeProps {
    visible: boolean
}

export const Like = () => {
    const [animate, setAnimate] = useState<boolean>(false)
    const [stop, setStop] = useState(true)
    const [pause, setPause] = useState<boolean>(false)
    const [visible, setVisible] = useState<boolean>(false)

    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: like,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <Container visible={visible}>
            <button
                onClick={() => setStop(false)}
            >
                start
            </button>
            <Lottie isStopped={stop} width={200} height={100} options={defaultOptions}>
            </Lottie>
        </Container>

    )
}