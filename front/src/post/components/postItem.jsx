export function PostItem({title, text}) {
    return <>
      <div className="p-4 w-full">
        <div className="shadow-md  p-3 rounded-md shadow-slate-200">
          <h3 className="font-bold text-lg">{title}</h3>
          <p>
            {text}
          </p>
        </div>
      </div>
    </>
}
