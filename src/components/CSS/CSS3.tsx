import { useEffect, useState } from 'react'
import { ShikiMagicMove } from 'shiki-magic-move/react'
import { type HighlighterCore, getHighlighter } from 'shiki'
import 'shiki-magic-move/dist/style.css'

export default function CSS3() {
    const [code, setCode] = useState(`.products {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
}

.productCard {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.rating {
  // ... other rules
  margin-top: auto;
}`)
    const [highlighter, setHighlighter] = useState<HighlighterCore>()

    useEffect(() => {
        async function initializeHighlighter() {
            const highlighter = await getHighlighter({
                themes: ['monokai'],
                langs: ['css'],
            })
            setHighlighter(highlighter)
        }
        initializeHighlighter()
    }, [])

    function animate(code:string) {
        setCode(code)
    }

    return (
        <div>
            {highlighter && (
                <>
                    <ShikiMagicMove
                        lang="css"
                        theme="monokai"
                        highlighter={highlighter}
                        code={code}
                        options={{ duration: 800, stagger: 0.3, lineNumbers: true }}
                    />
                    <button onClick={() => animate(`.products {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
}

.productCard {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.rating {
  // ... other rules
  margin-top: auto;
}

.price {
  // ... other rules
  min-height: 4rem;
}`)}>Align price</button>

                </>
            )}
        </div>
    )
}
