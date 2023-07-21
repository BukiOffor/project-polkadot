import { useMoralis } from "react-moralis"


const connectWallet = () => {
    const { authenticate, isAuthenticated, user } = useMoralis();

  if (!isAuthenticated) {
    return (
      <div>
        <button onClick={() => authenticate()}>Authenticate</button>
      </div>
    );
  }

}

export default connectWallet


