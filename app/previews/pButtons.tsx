import Button from "@/components/Button";

const PButtons = ()=>{
    return <>
        <div className="p-8">
                        <h2 className="text-2xl font-bold mb-6">Buttons</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <Button className="w-fit">اضفط</Button>
                            <Button variant="secondary" className="w-fit">اضغط</Button>
                            <Button  disabled={true} className="w-fit">اضغط</Button>
                            <Button variant="secondary" disabled={true} className="w-fit">اضغط</Button>
                        </div>
                    </div>
    </>
}

export default PButtons;