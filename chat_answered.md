https://chatgpt.com/canvas/shared/67fd7d8a943881918892b4915d10c46b

## Okruhy témat pro test z BDM

### 1. Jaké jsou tři základní funkce peněz?
- **Prostředek směny** – slouží k nákupu a prodeji zboží a služeb.
- **Měřítko hodnoty** – umožňuje porovnávat hodnotu různých statků.
- **Uchovatel hodnoty** – zachovává si hodnotu v čase.

### 2. Čtyři vlastnosti peněz:
- **Dělitelnost** – lze je rozdělit na menší jednotky.
- **Přenositelnost** – snadno se přenášejí mezi lidmi.
- **Stálost hodnoty** – neměla by výrazně kolísat jejich hodnota.
- **Rozpoznatelnost** – snadno identifikovatelné a ověřitelné.

### 3. Tři digitální platidla:
- Bitcoin (BTC)
- Ethereum (ETH)
- Litecoin (LTC)

### 4. Co je privátní klíč ve standardu secp256k1?
- Je to náhodné číslo z intervalu \( [1, n-1] \), kde \( n \) je řád eliptické křivky.

### 5. Čím je tvořen veřejný klíč?
- Je to bod na eliptické křivce: \( P = k \cdot G \), kde \( k \) je privátní klíč.

### 6. Máme privátní klíč \( k \), jak získáme veřejný klíč \( P \)?
- \( P = k \cdot G \), kde \( G \) je generátor na křivce secp256k1.

### 7. Konečné těleso \( \mathbb{Z}_{23} \): kolik je \( 2^{-10} \)?
- Použijeme: \( 2^{-10} \equiv 2^{11} \mod 23 \)

### 8. Konečné těleso \( \mathbb{Z}_{11} \): kolik je \( \frac{8}{11^2} \)?
- \( \frac{8}{121} = 8 \cdot 121^{9} \mod 11 \) (Fermatova malá věta)

### 9. \( (21 + 23^6) \cdot 23^7 \mod 23 \)?
- \( 21 + 0 = 21,\quad 23^7 \mod 23 = 0,\quad 21 \cdot 0 = 0 \)

### 10. Co představuje číslo \( n \) ve standardu secp256k1?
- Je to řád generujícího bodu \( G \), tj. počet bodů generovaných z \( G \).

### 11. Dvě utajené hodnoty při ECDSA podpisu:
- Privátní klíč \( k \) a nonce \( r \); oba z rozsahu \( [1, n-1] \), nonce je náhodně vygenerováno.

### 12. Tři očekávané vlastnosti hash funkce:
- **Kolizní odolnost** – obtížné najít dva různé vstupy se stejným hashem.
- **Jednosměrnost** – nelze získat vstup zpět z výstupu.
- **Avalanche efekt** – malá změna ve vstupu zásadně změní výstup.

### 13. Jak vzniká BTC adresa z veřejného klíče (Base58Check):
- Public Key → SHA256 → RIPEMD160 → přidání verze → 2x SHA256 → vezmu prvních 4 bajty → připojím k datům → zakóduji Base58 → adresa

### 14. BIP-39 seed 160 bitů – kolik slov a jak velká checksum?
- 160 / 32 = 5 → checksum = 5 bitů → 160 + 5 = 165 bitů → 165 / 11 = 15 slov

### 15. Extended key v BIP-32:
- Skládá se z: klíč (priv/pub) + chain code → velikost 512 bitů (64 bajtů)

### 16. Dva základní rysy extended key:
- Umožňuje odvozovat child klíče.
- Nelze zpětně odvodit parent key z child key.

### 17. Z čeho se skládá transakce?
- Vstupy (inputs), výstupy (outputs), verze, locktime, a další metadata

### 18. Co je UTXO?
- "Unspent Transaction Output" – nevydaná část transakce, kterou lze utratit.

### 19. Co definujeme u vstupu transakce?
- TXID, vout (index), unlocking script (scriptSig), sequence number

### 20. Jak zjistíme poplatek transakce?
- Poplatek = součet inputů – součet outputů

### 21. Čtyři operace v P2PKH skriptu:
- **DUP** – duplikuje vrchní prvek stacku
- **HASH160** – provede SHA256 a poté RIPEMD160
- **EQUALVERIFY** – ověří rovnost dvou prvků a odstraní je
- **CHECKSIG** – ověří podpis proti veřejnému klíči

### 22. Dvě funkce bitcoin uzlu:
- Ověřuje a propaguje transakce a bloky.
- Uchovává kopii blockchainu.

### 23. Struktura bloku:
- Block header (verze, hash předchozího bloku, Merkle root, timestamp, target, nonce), počet transakcí, transakce

### 24. K čemu je Merkle tree?
- Umožňuje efektivní a bezpečné ověření transakce v bloku → do hlavičky bloku se ukládá Merkle root

### 25. Příklad Merkle tree (4 transakce):
- TX1, TX2, TX3, TX4 → hash(TX1+TX2), hash(TX3+TX4) → hash(root)

### 26. Jak se počítá block hash?
- Hashuje se hlavička bloku pomocí SHA256 dvakrát → kvůli Proof of Work musí být hash menší než target → trvá cca 10 min kvůli obtížnosti těžby

