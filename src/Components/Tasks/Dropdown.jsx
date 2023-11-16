import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const Dropdown = () => {
  return (
    <div className="flex justify-end  my-[10px]">
      <Select >
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Filter" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="today">Today</SelectItem>
      <SelectItem value="week">This Week</SelectItem>
      <SelectItem value="month">This Month</SelectItem>
      <SelectItem value="all">All</SelectItem>

    </SelectContent>
  </Select>
    </div>
  
  )
}

export default Dropdown
