type CheckboxHour= {
  titleLabel: string
  changed: () => void
  checked: boolean
}


export function CheckboxHour({
  titleLabel,
  changed,
  checked
}: CheckboxHour){
  return(
    <>
      <div className="flex gap-2">
          <label 
            htmlFor={titleLabel} 
            className="text-lg"
            >{titleLabel}</label>
          <input 
            type="checkbox" 
            className="w-3/12"
            checked={checked}
            onChange={changed}
            />
      </div>
    </>
  );
}