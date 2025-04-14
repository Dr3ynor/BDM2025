# 📘 Bitcoin – Přehled

## BTC Adresa = Public Key Hash

---

## 🔐 Asymetrické šifrování
- Private Key → podpis → ověřit pomocí Public Key  
- Zašifrovat Public Key → dešifrovat Private Key

---

## 📐 Discrete Log Problem
- \( R = k \cdot G \)
- Znáš-li \( k \) a \( G \), spočítáš \( R \)
- Z \( R \) a \( G \) spočítat \( k \) je prakticky nemožné

---

## 🧮 Finite Field (Konečné pole)
- Operace jako dělení jsou obtížné
- Využívá se aritmetika modulo

### Modulo a záporná čísla:
- \(-9 \% 12 = 3\)  
→ 12 - 9 = 3

---

## 🧠 Fermatova malá věta
- Umožňuje převést dělení na násobení:  
  \(\frac{a}{b} \mod p = a \cdot b^{p-2} \mod p\)
- Exponenty zjednoduším:  
  \(a^x \mod p = a^{x \% (p-1)} \mod p\)

---

## 🔐 ECDSA (Eliptická křivka – digitální podpis)
- Používá eliptickou křivku nad konečnými poli
- Hlavní operace: Scalar Multiplication, Point Doubling

### Křivka: secp256k1
- Rovnice: \( y^2 = x^3 + 7 \)

### Algoritmus:
- \( P = pk \cdot G \) (public key)  
- \( R = k \cdot G \) (bod na křivce)  
- \( k \): náhodné tajné číslo → nesmí být odhaleno!  
- Podpis: pár (r, s)  
- Validace:  
  \( K \cdot G = \frac{z}{s} \cdot G + \frac{r}{s} \cdot P \)

---

## 📦 DER (Distinguished Encoding Rules)
- Formát pro serializaci podpisu (r, s)
- Big Endian
- r = x-ová souřadnice bodu R

---

## 🔑 Public Key
- Bod na křivce: \( pk \cdot G \)
- 520 bitů
- Prefixy:
  - 0x04: uncompressed
  - 0x02 / 0x03: compressed

---

## 🔄 Hashovací funkce
- Vlastnosti:
  - Avalanche efekt
  - Unikátnost
  - Jednosměrnost
- Rychlé vs pomalé (v Blockchainu chtěné pomalé)

### Bezpečné funkce:
- SHA256 (32 B)
- RIPEMD160 (20 B)

### Použité:
- Public Key → SHA256 → RIPEMD160 → Base58Check → BTC adresa

---

## 🔠 Base58 / Base58Check
- Odstraněny znaky jako 0, O, l, I
- Přidána verze a checksum:  
  checksum = SHA256(SHA256(version + data))

---

## 👛 Wallet
- Drží klíče, adresy, trackuje balance
- Vytváří a podepisuje transakce

### Typy:
- **Nedeterministické** – náhodné klíče, chaos
- **Deterministické** – vše z jednoho seedu
- **Hierarchicky deterministické (HD)** – stromová struktura klíčů

---

## 🧠 BIP-39 (Mnemonická fráze)
- Každých 11 bitů = jedno slovo
- Z random čísla (např. 128 bit) se vytvoří kontrolní hash → přidá 4 bity → rozdělení na slova

### Výpočet:
- \( \text{bitů k přidání} = N / 32 \)
- \( \text{počet slov} = (N + N/32) / 11 \)

---

## 🌲 BIP-32 (HD peněženky)
- Extended Key = Private/Public + Chain Code (512 bitů)
- Z extended key lze derivovat jen potomky

---

## 🔁 Transakce v Bitcoinu
- Každá transakce = vstup (input) + výstup (output)
- Vstup musí být utracen celý → zbytek jako nový output

### UTXO:
- Unspent Transaction Output – zůstatek adresy

### Output:
- `value`: kolik BTC  
- `locking script` (scriptPubKey): zamyká prostředky

### Input:
- `txid`: identifikátor UTXO  
- `vout`: index výstupu  
- `scriptSig`: unlocking script  
- `sequence`: pro časové zámky

### Fee:
- \( \text{fee} = | \text{inputy} - \text{outputy} | \)

### Coinbase:
- První transakce v bloku
- Nemá input → generuje nové BTC pro těžaře

---

## 🧾 Transakční skripty (Bitcoin Script)
- Stack-based jazyk
- Bez smyček
- Deterministický
- Uspěje, pokud na stacku zůstane nenulová hodnota

### P2PKH operace:
1. `DUP`
2. `HASH160`
3. `EQUALVERIFY`
4. `CHECKSIG`

---

## 🌐 Nodes
- Peer-to-peer síť
- Validují bloky a transakce
- Udržují celý ledger

### Pools:
- Paměť nepotvrzených transakcí
- UTXO databáze

---

## 🧱 Blok
- Hlavička: 80 B (verze, předchozí hash, timestamp, target, nonce)
- Blok obsahuje transakce
- Blok hash musí být < difficulty (začínat N nulami)

### Block Height:
- Délka řetězce → nejdelší platí

### Merkle Tree:
- Strom z hashů všech transakcí
- Umožňuje rychle ověřit, že transakce je v bloku

---

## ⛏️ Těžba (Mining)
- Těžař hledá nonce → blok hash < target
- Target určuje obtížnost (počet nul)
- Retargeting každých ~14 dní

---

## 📈 Hashrate útoky
- 51% attack  
- Double spending  
- DoS

---

## 📮 OP_RETURN
- Umožňuje uložit zprávu do blockchainu (max 80 B)
- Není utratitelná

---

## ⏳ Timelock
- Prostředky lze utratit až po určitém čase/bloku

---

## ⚡ Lightning Network
- Layer 2 pro rychlé platby
- Multihop payments (atomické)
- HTLC (Hashed Timelock Contracts)

### Faktura:
- Obsahuje: částku, adresu, platnost, preimage (tajný string)

### HTLC:
- Hash = veřejný  
- Preimage = tajný  
- Příjemce musí odhalit preimage k vybrání prostředků

---

## 🌍 Gossip Protocol
- Uzly si vyměňují informace o ostatních uzlech

## 📍 Routing
- Každý uzel zná jen sousedy
- Omezení: směrovost, kapacita, fee, HTLC timeout

---

## 🔄 BIP-152
- Compact Block Relay
- Místo celé transakce se posílá jen identifikátor (6 bajtů)
- Zbytek se stáhne jen pokud je potřeba
