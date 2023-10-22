import { FilterProps } from "../../types/types"
const Filter: React.FC<FilterProps> = ({ changeFilter }) => {
    const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const selectedCategory: string = event.target.value

        changeFilter((prevFilter) => ({
            ...prevFilter,
            category: selectedCategory,
        }))
    }

    const handleChangeStatus = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const selectedStatus: string = event.target.value

        changeFilter((prevFilter) => ({
            ...prevFilter,
            status: selectedStatus,
        }))
    }

    return (
        <div className="flex flex-col rounded-md text-center">
            Filter
            <div className="flex justify-center align-middle gap-4">
                <div className="flex justify-center gap-4">
                    <label htmlFor="categories">Categories</label>
                    <select
                        id="categories"
                        className="border"
                        onChange={handleChangeCategory}
                    >
                        <option value="All">All</option>
                        <option value="Electronic">Electronic</option>
                        <option value="Clothe">Clothe</option>
                    </select>
                </div>
                <div className="flex justify-center gap-4">
                    <label htmlFor="status">Status</label>
                    <select
                        id="status"
                        className="border"
                        onChange={handleChangeStatus}
                    >
                        <option value="All">All</option>
                        <option value="New">New</option>
                        <option value="Used">Used</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filter
