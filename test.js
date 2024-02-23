import { createAgent } from '@dfinity/utils'
import { Principal } from '@dfinity/principal';
import {Secp256k1KeyIdentity} from '@dfinity/identity-secp256k1';
import {AccountIdentifier, IndexCanister} from '@dfinity/ledger-icp';

const seedPhrase = 'message afraid leader host dance success month scrub wrestle flock extra dizzy penalty inform depth outside slab trouble often awake rain undo material innocent';

(async () => {
    const identity = await Secp256k1KeyIdentity.fromSeedPhrase(seedPhrase);
    const agent = await createAgent({
        identity,
        host: 'http://localhost:54064',
        fetchRootKey: true
    });

    const IDENTITY_CANNISTER_ID = 'qhbym-qaaaa-aaaaa-aaafq-cai';
        
    const index = IndexCanister.create({agent, canisterId: IDENTITY_CANNISTER_ID});
    
    try {
        const prStr = 'by6od-j4aaa-aaaaa-qaadq-cai';
        const pri = Principal.from(prStr);
        const accountIdentifier = AccountIdentifier.fromPrincipal({principal: pri});

        const data2 = await index.getTransactions({accountIdentifier, start: BigInt(0), maxResults: BigInt(100)});
        console.log(data2);
    } catch(e) {
        console.error(e);
    }
})();
