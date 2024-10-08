import { transferSol } from "./_apis/AllApis";
import AddWallet from "./_components/AddWallet";
import Box from "./_components/Box";
import Button from "./_components/Buttons";
import SearchBar from "./_components/SearchBar";
import SendButton from "./_components/SendButton";
import TransferToken from "./_components/TransferToken";
import Wallet from "./_components/Wallet";
import WalletCarousel from "./_components/WalletCarousel";
import WalletConnectorPopup from "./_components/WalletConnectorPopup";

export default function Home() {
  // const receiverPublic = "";
  // const senderPrivate = "";
  // const amount=1;
   
  return (
    <main className="container p-20 gap-20 scrollbar-hide">
      {/* <SendButton receiverPublic={receiverPublic} senderPrivate={senderPrivate} amount={amount} /> */}
      <WalletConnectorPopup />
      <WalletCarousel />
      <div className="flex container gap-20 py-20">
        <TransferToken />
        <div className="w-full flex flex-col gap-4">
          <SearchBar
            className="w-full w-1/2"
            placeholder="Search Solana Address..."
          />
          <Box />
        </div>
      </div>
    </main>
  );
}
