import { DatePicker } from "@ark-ui/react/date-picker"
import { Portal } from "@ark-ui/react/portal"
import { ChevronLeft, ChevronRight, Calendar, X } from "lucide-react"
// 1. Import the date parser
import { parseDate } from "@internationalized/date"

export const ArkDatePicker = ({ value, onChange, placeholder }) => {
  
  // 2. This function converts our state (string or null)
  //    into the array the component expects.
  const getPickerValue = () => {
    if (!value) return [];
    try {
      // It converts "2025-11-10" into a CalendarDate object
      return [parseDate(value)];
    } catch (e) {
      // Failsafe in case of bad data
      return [];
    }
  };

  return (
    <DatePicker.Root
      // 3. Use our new function to set the value
      value={getPickerValue()}
      onValueChange={(details) => {
        // 4. When the value changes, store it as a simple string
        //    or null if it's cleared.
        const dateString = details.value[0]?.toString() || null;
        onChange(dateString);
      }}
    >
      <DatePicker.Control>
        <DatePicker.Label className="block text-sm font-bold text-white/80 text-left">
          {placeholder}
        </DatePicker.Label>
        <div className="relative mt-1">
          <DatePicker.Input
            className="block w-full p-3 bg-transparent border-0 border-b-2 border-gray-300 focus:border-primary focus:ring-0 rounded-none text-white placeholder:text-white/60"
            placeholder={`Select ${placeholder}`}
          />
          <DatePicker.Trigger className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white">
            <Calendar size={18} />
          </DatePicker.Trigger>
        </div>
      </DatePicker.Control>

      {/* ... (Rest of the file is unchanged) ... */}
      <Portal>
        <DatePicker.Positioner>
          <DatePicker.Content className="mt-2 w-full max-w-sm rounded-none border border-red-700 bg-black/90 backdrop-blur-sm shadow-xl p-3 z-50">
            
            <div className="flex gap-2 mb-3">
              <DatePicker.YearSelect className="flex-1 rounded-none border border-gray-600 bg-black/80 px-2 py-1 text-sm text-white" />
              <DatePicker.MonthSelect className="flex-1 rounded-none border border-gray-600 bg-black/80 px-2 py-1 text-sm text-white" />
            </div>

            <DatePicker.View view="day">
              <DatePicker.Context>
                {(datePicker) => (
                  <>
                    <DatePicker.ViewControl className="flex justify-between items-center mb-2 text-sm font-medium text-white/80">
                      <DatePicker.PrevTrigger className="p-1 rounded-lg hover:bg-red-700">
                        <ChevronLeft size={18} />
                      </DatePicker.PrevTrigger>
                      <DatePicker.ViewTrigger className="cursor-pointer px-2 py-1 rounded-md hover:bg-red-700">
                        <DatePicker.RangeText />
                      </DatePicker.ViewTrigger>
                      <DatePicker.NextTrigger className="p-1 rounded-lg hover:bg-red-700">
                        <ChevronRight size={18} />
                      </DatePicker.NextTrigger>
                    </DatePicker.ViewControl>

                    <DatePicker.Table className="w-full text-center text-sm">
                      <DatePicker.TableHead>
                        <DatePicker.TableRow>
                          {datePicker.weekDays.map((weekDay, id) => (
                            <DatePicker.TableHeader
                              key={id}
                              className="py-1 text-gray-400"
                            >
                              {weekDay.short}
                            </DatePicker.TableHeader>
                          ))}
                        </DatePicker.TableRow>
                      </DatePicker.TableHead>
                      <DatePicker.TableBody>
                        {datePicker.weeks.map((week, id) => (
                          <DatePicker.TableRow key={id}>
                            {week.map((day, id) => (
                              <DatePicker.TableCell key={id} value={day}>
                                <DatePicker.TableCellTrigger
                                  className="w-9 h-9 flex items-center justify-center rounded-lg text-white/90 data-[selected]:bg-red-700 data-[selected]:font-bold hover:bg-red-700/50 focus:ring-2 focus:ring-red-500 data-[outside-range]:text-white/30"
                                >
                                  {day.day}
                                </DatePicker.TableCellTrigger>
                              </DatePicker.TableCell>
                            ))}
                          </DatePicker.TableRow>
                        ))}
                      </DatePicker.TableBody>
                    </DatePicker.Table>
                  </>
                )}
              </DatePicker.Context>
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Positioner>
      </Portal>
    </DatePicker.Root>
  )
}