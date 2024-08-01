import './index.css'
const StatsTable = ({ headers, values }) => {
    return (
        <table className="stats-table">
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {values.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.values.map((value, valueIndex) => (
                            <td key={valueIndex}>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StatsTable;
