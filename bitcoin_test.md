BTC address = Public Key

# Asymetrické šifrování
když něco podepíšu private key - podpis -> lze ověřit public klíčem
když něco zašifruju public klíčem - dešifruju private key


# Discrete log problem
R = k * G

R je jednoduché vypočítat z k a G
ale vypočítat k z R a G je téměř nemožné



# Finite Field
dělení těžké


Modulo negative numbers
- 9 % 12 = 3

12 - 9 = 3


# Fermatova malá věta

převedu dělení na násobení -> nemám vyřešené exponenty.. proto použiju a^(exp) = a^(exp%(p-1)) % p

a/b zbytková třída p = a * b^(p-2)

a^(exp) = a^(exp%(p-1)) % p


# ECDSA
Eliptic Curve -> na konečných polích
co se dá na tom dělat? - Scalar Multiplication, Double Point,


## Fíčury
secp256k1 = y^2 = x^3 + 7

## Algoritmus
R je bod na eliptické křivce
R = bazmek z obrázku (z/s*g  + r/s * P  == K*g)

P = pk * G
P - public key
pk - private key

k je random neveřejné číslo - kdyby bylo veřejné dá se vypočítat private key

ECDS.png
(r,s) = reprezentuje podpis z použitím pk
pk a k nejsou public


n je velké prvočíslo - kdyby to nebylo prvočíslo nefungoval by fermátův malý teorém



# DER
Distinguished Encoding Rules Format
- Big Endian
- pár (r,s) r - xová souřadnice R

# Hashovací funkce
- SHA-1
- MD5

## vlastnosti Hashovací funkce
- Avalanche effect
- unikátnost
- pomalý výpočet

## Dobré kolizní vlastnosti (používají se v blockchainu)
- SHA256 (32bytes)
- RIPEMD160 (20bytes)


# Jak se utrací?

každá transakce je z input a output skriptu
output - má info o příjemci
input - má info od příjemce


musí se utratit celý input (zbytek se posílá zpět odesílateli)
input a output se musí rovnat (nějaké fee jde minerovi)



# Base58
## Base58Check
mám data, a přídám k tomu verzi a checksum to je (2x SHA256(version+data))

# BTC Adresa
Public Key -> SHA256 -> RIPEMD160 -> Public Key Hash -> Base58Check -> výsledná BTC Adresa


# Public klíč a jeho formáty
- je to bod na eliptické křivce
- Public Key = pk * G
- 520bitů
- Prefixy 0x04 - uncompressed public key, 0x02/0x03 compressed public key


# Wallet
drží klíče a adresy
trackuje balance
vytváří a podepisuje transakce

## Typy
úroveň samostatnosti

### Nedeterministické
- nemá řád
- náhodné private klíče, generuju donekonečna
- každý klíč je použit právě jednou
- management klíčů těžký



### Deterministické (jeden seed)
- mám jeden seed a všechny private klíče jsou z něho odvozeny

### Hierarchically deterministic
- mám seed z toho se dělá master key a z toho dělám stromovou strukturu
- stromy, přehledné


# BIP-39
- každých 11 bitů(index) je slovo

- random N=128 bitové číslo (nebo 160, 192 224, 256...)
- hashnu ho
- 4 bity z hashuntého přidám k random číslu a splitnu to na 12 čísel

## výpočet počtu slov
vemu to číslo N / 32 = počet bitů co přidám k tomu původnímu
pak to podělím 11 a získám počet slov


# BIP-32 v hierarchické peněžence
- Extended Key má dvě části (private key/public, C - ChainCode)
- 512 bitů
- prvních 256 bitů

u extended key můžu derivovat jen children keys.. nemůžu derivovat parent keys


# Transakce

UTXO nespendnutá část transakce - takže celkový zůstatek bitcoinu

## Output
- value
- locking script - zamyká prostředky (puzzle na rozluštění abych mohl utrácet)
- input script - odemyká prostředky

Coinbase transakce - nemá input má pouze outputy - aby se dostaly bitcoiny do běhu
Coinbase transakce je odměna pro těžaře


## Input
- txid - UTXO identifier
- vout - 
- scriptsig - unlocking script
- sequence

## Fees
- reward sum inputů - sum outputů (radši dát do absolutní hodnoty xd)
- odměna pro minera

## Transaction Scripts
- žádné loopy, jen podmínky
- deterministický output
- nezávislé na systému
- predikovaný čas dokončení
- list komandů
- operuje to na stacku
- data (elementy) vždy se pushují na stack
- operace
- script je uspěšný pokud na stacku je nenulová hodnota


# P2PKH operace
DUP - duplikovat top z stacku
HASH160 - vypočítá sha256 a ripemd160
EQUALVERIFY - dvě věci ze stacku a porovná je
CHECKSIG - porovná dva elementy


# Nodes
- decentralizované
- peer to peer
- každý node má celou kopii ledgeru
- validuje transakce a bloky
- nodes si mezi sebou posílají nové bloky, transakce, merkleblock messages

## Pools
- seznam nepotvrzených transakcí, které si každý node trackuje
- obsahuje i UTXO Database


# BIP 152
- posílá se 6 bajtový identifikátor místo transakce
- Transakce může být poslána, pokud je vyžádána


## Compact block relay
- low bandwidth
- high bandwidth
zase nějaký lazyload... viz BIP 152


# Transaction Rules


# Block
- 4 bajty
- block header - 80 bajtů (verze, prev block hash, timestamp, target (počet nul na začátku hashe), nonce(bity co přidávám.. to je to co se těží a nonce je odpověď))


## Block Hashing


## Block Height
nejdelší branch je relevantní

## Block time
kdy se má block pushnout

# Merkle Tree
- dělá hash všech transakcí (asi se dá oddvodit) 
- checkuje jestli je transakce v bloku

# Mining
- prvních N bajtů v bloku musí být 0
- N je řízen podle target
- Block hash < difficulty
- na výpočet složitosti se používá Target a exponent

# Hash rate attack
- Double spending
- DoS

# Retargeting
- těžba je buďto těžší nebo lehčí každých 14 dnů


# OPRETURN
- můžu napsat zprávu do blockchainu (až 80 bajtů)
- nelze utratit
- prostě jsem si zaplatil místo v tom bloku a ta zpráva tam bude :)

# Timelock
- musím počkat x bloků, než můžu utratit danou částku


# Lightning
- multihop payment (atomická platba, účastníci si nemůžou krást peníze)
- příjemce vygeneruje fakturu (obsahuje kolik,kam, validitu, a preimage)
- faktura je poslána posílateli
- posílatel najde cestu a vytvoří timelocky pro svoje peers


## Hashed time locked contracts (HTLC)
- preimage - random secret
- hash - public value
- contract - příjemce musí ukázat preimage pro hash, aby mohl vybrat ty prostředky

# Gossip protocol
každý lightning uzel umí učit o dalších v síti

# Routing
- Najít cestu skrz síťový graf (?)

## Omezení
- směrovost
- kapacita kanálu
- HTLC omezení (fee, CLTV)
- uzly neví plnou cestu, jenom ví o svých sousedech (asi)
