interface LocationTabProps {
    key: Number
    name: string;
    selectedLocation: string;
    onClick: (name: string) => void;
}

const LocationTab: React.FC<LocationTabProps> = (props) => {
    const handleSelectLocation = () => {
        props.onClick(props.name);
    };

    if (props.selectedLocation === props.name) {
        return (
            <div className="text-base bg-gray-200 border rounded-md px-2 py-1 cursor-pointer" onClick={handleSelectLocation}>
                {props.name}
            </div>
        );
    }
    return (
        <div className="text-base border rounded-md px-2 py-1 cursor-pointer" onClick={handleSelectLocation}>
            {props.name}
        </div>
    );
};

export default LocationTab;