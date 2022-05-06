const miModulo = (() => { "use strict"; let e = []; const t = ["C", "D", "H", "S"],
        r = ["A", "J", "Q", "K"]; let a = []; const n = document.querySelector("#btnPedir"),
        o = document.querySelector("#btnDetener"),
        l = document.querySelector("#btnNuevo"),
        s = document.querySelectorAll(".divCartas"),
        d = document.querySelectorAll("small"),
        c = () => { e = []; for (let r = 2; r <= 10; r++)
                for (let a of t) e.push(r + a); for (let a of t)
                for (let t of r) e.push(t + a); return _.shuffle(e) },
        i = () => { if (0 === e.length) throw "No hay cartas en el deck"; return e.pop() },
        u = (e, t) => (a[t] += (e => { const t = e.substring(0, e.length - 1); return isNaN(t) ? "A" === t ? 11 : 10 : 1 * t })(e), d[t].innerText = a[t], a[t]),
        m = (e, t) => { const r = document.createElement("img");
            r.src = `assets/cartas/${e}.png`, r.classList.add("carta"), s[t].append(r) },
        f = e => { let t = 0;
            do { const r = i(); if (t = u(r, a.length - 1), m(r, a.length - 1), e > 21) break } while (t < e && e <= 21);
            (() => { const [e, t] = a;
                setTimeout(() => { t === e ? alert("Nadie gana :(") : e > 21 ? alert("Computadora gana") : t > 21 ? alert("Jugador Gana") : alert("Computadora Gana") }, 100) })() }; return n.addEventListener("click", () => { const e = i(),
            t = u(e, 0);
        m(e, 0), t > 21 ? (console.warn("Lo siento mucho, perdiste"), n.disabled = !0, o.disabled = !0, f(t)) : 21 === t && (console.warn("21, genial!"), n.disabled = !0, o.disabled = !0, f(t)) }), o.addEventListener("click", () => { n.disabled = !0, o.disabled = !0, f(a[0]) }), l.addEventListener("click", () => {
        ((t = 2) => { e = c(), a = []; for (let e = 0; e < t; e++) a.push(0);
            d.forEach(e => e.innerText = 0), s.forEach(e => e.innerText = ""), n.disabled = !1, o.disabled = !1 })() }), "que mirai sapo" })();