import "./ExampleOne.css"
import {ChangeEvent, useState} from "react";
import {ExampleOneCode} from "./ExampleOneCode";

export function ExampleOne() {
    const [checked, setChecked] = useState(false)

    return (
        <div className="wntdr__example-one wntdr-page">
            <div className="wntdr__example-one__example">
                <section>
                    In this example a component definition is defined within the function body of another component.
                    This causes rendering issues. When the parent component changes it will re-create the child component
                    wiping all previous state.

                    <p>
                        Try it, enter some text in the box, then check the checkbox.
                    </p>

                    <p>
                        To fix this define function BadNestedComponent outside of ExampleOne
                    </p>
                </section>

                <section>
                    <label className="wntdr__example-one__check-wrapper">
                        Check me and watch your text disappear
                        <input type="checkbox" checked={checked} onChange={onCheckChanged} />
                    </label>

                    <BadNestedComponent />
                </section>
            </div>

            <ExampleOneCode />
        </div>
    )

    function onCheckChanged(event: ChangeEvent<HTMLInputElement>) {
        setChecked(event.target.checked)
    }
}

function BadNestedComponent() {
    const [nestedTextValue, setNestedTextValue] = useState<string>('')

    return (
        <div className="wntdr__example-one__bad-nested-component">
            <input
                placeholder="Enter Some Disappearing Text"
                value={nestedTextValue}
                onChange={onInputChange}
            />
        </div>
    )

    function onInputChange(event: ChangeEvent<HTMLInputElement>) {
        setNestedTextValue(event.target.value)
    }
}