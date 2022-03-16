
const HeaderBoard = ({headerName}) => {
  return (
    <th
        scope="col"
        className={`px-6 py-3 ${headerName === "Asset" ? "text-left" : "text-center"} text-xs font-medium text-gray-500 uppercase tracking-wider`}
    >
        {headerName}
    </th>
  )
}

export default HeaderBoard