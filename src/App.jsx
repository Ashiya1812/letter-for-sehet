import React, { useState} from "react";

export default function App() {
  const [opened, setOpened] = useState(false);

  const letter = `Dear Sehet,

Shayad yeh letter tumhare liye unexpected ho, lekin jo baat kaafi time se mere dil mein hai, aaj use lafzon mein bayaan karne ki himmat kar raha hu.

Aur shayad tum soch rahi hogi ki yeh sab main tumhe saamne baith kar bhi keh sakta tha.

Sach kahun to mere paas itni himmat nahi thi. Jab bhi sochta tha ki tumse yeh sab saamne kahunga, dil ki baatein dil mein hi reh jaati thi aur lafz saath chhod dete the.

Isliye maine likhna choose kiya. Kyunki kuch ehsaas aise hote hain jo aankhon mein dekh kar kehna mushkil hota hai, lekin kagaz par utarna thoda aasan lagta hai.

Ho sakta hai meri awaaz yeh sab na keh paati, lekin mera dil bahut pehle se yeh sab tumse kehna chahta tha.

Mujhe pata hai ki zindagi ne tumhe hamesha waise experiences nahi diye jinke tum haqdar thi. Kabhi-kabhi kuch log aur kuch yaadein insaan ka trust itna tod dete hain ki phir kisi naye insaan par bharosa karna mushkil lagne lagta hai.

Mujhe aaj bhi tumhari woh baat yaad hai jab tumne kaha tha ki "99% ladke cheat karte hain ya double dating jaisi cheezein karte hain."

Sach kahun, us waqt maine tumse behas nahi ki, kyunki mujhe laga ki shayad us baat ke peeche bahut saare experiences aur dard chupe hue honge.

Lekin aaj main tumse sirf ek chhoti si request karna chahta hu...

Mujhe us bache hue 1% mein khud ko prove karne ka ek mauka de do.

Main yeh nahi keh raha ki meri baaton par yakeen kar lo. Main yeh bhi nahi keh raha ki turant trust kar lo. Bas mujhe itna waqt aur ek mauka de do ki main apne actions se tumhe dikha sakun ki har insaan ek jaisa nahi hota.

Main tumhare trust ko demand nahi kar raha, main use earn karna chahta hu.

Mujhe pata hai ki Gwalior mein tumhare experiences hamesha waise nahi rahe jinki tum haqdar thi. Shayad kuch logon ne tumhe woh respect, care aur importance nahi di jo milni chahiye thi.

Main tumhare past ko badal nahi sakta, aur na hi un logon ki galtiyon ko mita sakta hu. Lekin itna zaroor keh sakta hu ki yeh Gwalior ka ladka un logon jaisa nahi banna chahta.

Main tumhari feelings ki respect karunga, tumhari value samjhunga aur har us cheez ka khayal rakhunga jo tumhare liye important hai.

Aur shayad meri sabse sachchi baat yeh hai ki tum mere liye itni important ho ki main khud ka ek behtar version banne ki koshish karunga, bina tumhare kehne ka intezar kiye.

Main kisi aur banne ka wada nahi karta, lekin itna zaroor wada karta hu ki agar tum meri zindagi ka hissa banti ho, to main har din khud ko aur behtar insaan banane ki koshish karunga.

Sach kahun to shayad mujhe tumhare jawab ka andaza hai. Ho sakta hai jo main sunna chahta hu, woh mujhe na mile. Ho sakta hai is letter ke baad main bahut udaas ho jaun.

Lekin phir bhi maine yeh sab likha, kyunki kuch ehsaas aise hote hain jo dil mein daba kar rakhne se zyada takleef dete hain.

Main tumse koi promise, koi commitment ya koi forced answer nahi maang raha. Main bas ek chhota sa chance maang raha hu. Ek mauka, jahan tum mujhe meri baaton se nahi, mere actions se judge kar sako.

Bas ek baar mujh par trust karke dekh lo.

Main poori koshish karunga ki tumhe apne faisle par kabhi regret na ho. Tumhari khushi, tumhara sukoon aur tumhari respect mere liye hamesha important rahegi.

Zindagi mein agar koi cheez ek baar galat ho jaye, to hum hamesha us cheez ko chhod nahi dete. Hum sambhalte hain, seekhte hain aur jab himmat hoti hai, to dobara us par bharosa karne ki koshish karte hain.

Isliye dil mein ek chhoti si umeed lekar yeh letter likh raha hu ki shayad tum mujhe ek mauka dogi. Ek mauka tumhare trust ko earn karne ka, tumhe samajhne ka, aur tumhe yeh mehsoos karane ka ki tumne kisi galat insaan par bharosa nahi kiya.

Isliye bas itni si guzarish hai...

Koi bhi faisla lene se pehle ek baar aaram se soch lena.

Main yeh nahi keh raha ki tum zaroor haan kaho, bas itna keh raha hu ki agar dil ke kisi kone mein thodi si bhi possibility lage, toh mujhe ek mauka dene ke baare mein zaroor sochna.

Ek chhota sa chance... khud ko prove karne ka, tumhara trust earn karne ka, aur tumhe yeh dikhane ka ki har kahani ka ending ek jaisa nahi hota.

Please Sehet... bas itna sa mauka dene ke baare mein ek baar dil se soch lena.

Aur aakhri mein bas itna...

Don't worry, tum jo bhi decision logi, main uski hamesha respect karunga. Main kabhi tum par kisi bhi tarah ka pressure nahi daalunga.

Lekin ek baat sach hai — tumhare liye meri respect, meri care aur mera behaviour kabhi nahi badlega.

Ho sakta hai waqt ke saath bahut si cheezein badal jaayein, lekin tumhare liye jo izzat aur jo jagah mere dil mein hai, woh hamesha khaas rahegi.

Bas itna chahta tha ki tum mere dil ki baat jaan lo.

Yours,
Ashish ❤️`;


  return (
    <div
      style={{
        minHeight: "100vh",
        background:
  "radial-gradient(circle, #4b2f1f 0%, #24140d 70%, #120905 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {!opened ? (
        <div
          onClick={() => setOpened(true)}
          style={{
            width: "320px",
            height: "220px",
            background:
  "linear-gradient(135deg, #d9b37a, #c89a5c, #e2c18f)",
  border: "2px solid rgba(90,50,20,.25)",j
            borderRadius: "10px",
            cursor: "pointer",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            transition: "0.3s",
          }}
        >
          <h1 style={{ color: "#3b2410" }}>
            💌 A Letter For Sehet
          </h1>

          <p style={{ color: "#5a3d21" }}>
            Click To Open
          </p>
        </div>
      ) : (
        <div
         style={{
  maxWidth: "850px",
  width: "100%",

  background: "#ead7b0",

  color: "#3d2a1a",

  padding: "70px",

  borderRadius: "4px",

  border: "2px solid #b08a56",

  boxShadow:
    "0 30px 80px rgba(0,0,0,.45), inset 0 0 120px rgba(120,90,50,.25)",

  fontFamily: "'Cormorant Garamond', serif",

  fontSize: "25px",

  letterSpacing: "0.5px",

  lineHeight: "2.2",

  whiteSpace: "pre-wrap",

  transform: "rotate(-0.3deg)",

backgroundImage:
  "linear-gradient(rgba(255,255,255,0.08), rgba(0,0,0,0.03))",
}}
        >
  <h1
  style={{
    fontFamily: "'Dancing Script', cursive",
    fontSize: "64px",
    color: "#5b3920",
    textAlign: "center",
    marginBottom: "10px",
    fontWeight: "700",
  }}
>
  For Sehet
</h1>

<div
  style={{
    textAlign: "center",
    marginBottom: "35px",
    color: "#8b6b3f",
    letterSpacing: "4px",
    fontSize: "14px",
  }}
>
  ❦ A Personal Letter ❦
</div>



          <hr
  style={{
    border: "none",
    borderTop: "1px solid rgba(90,57,32,.35)",
    marginBottom: "35px",
  }}
/>

          {letter}

          {true && (
            <div
              style={{
                textAlign: "center",
                marginTop: "40px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              🌹 The rest of this story is yours to decide... 🌹
            </div>
          )}
        </div>
      )}
    </div>
  );
}