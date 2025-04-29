import React, { useState } from 'react';
import { format, parse, addDays, nextDay } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

export const MagicalDatePicker = ({ onDateChange, placeholder = "Enter a date or try 'next friday'..." }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const parseNaturalLanguage = (input) => {
    const lowercased = input.toLowerCase().trim();
    
    // Handle common natural language inputs
    if (lowercased === 'today') {
      return new Date();
    }
    if (lowercased === 'tomorrow') {
      return addDays(new Date(), 1);
    }
    if (lowercased.startsWith('next ')) {
      const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      const dayIndex = days.indexOf(lowercased.replace('next ', ''));
      if (dayIndex !== -1) {
        return nextDay(new Date(), dayIndex);
      }
    }
    if (lowercased.match(/^in \d+ days?$/)) {
      const daysToAdd = parseInt(lowercased.match(/\d+/)?.[0] || '0');
      return addDays(new Date(), daysToAdd);
    }

    // Try parsing as a regular date
    try {
      const parsedDate = parse(lowercased, 'yyyy-MM-dd', new Date());
      if (parsedDate.toString() !== 'Invalid Date') {
        return parsedDate;
      }
    } catch {
      return null;
    }

    return null;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    
    const parsedDate = parseNaturalLanguage(value);
    if (parsedDate) {
      setSelectedDate(parsedDate);
      onDateChange(parsedDate);
    } else if (value === '') {
      setSelectedDate(null);
      onDateChange(null);
    }
  };

  const handleCalendarSelect = (date) => {
    if (date) {
      setSelectedDate(date);
      setInputValue(format(date, 'PPP'));
      onDateChange(date);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <div className="relative">
            <Input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder={placeholder}
              className="w-full pl-4 pr-10 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-transparent"
              onClick={() => setIsOpen(true)}
            >
              <CalendarIcon className="h-5 w-5 text-gray-500" />
            </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleCalendarSelect}
            initialFocus
            className={cn("p-3 pointer-events-auto")}
          />
        </PopoverContent>
      </Popover>
      {selectedDate && (
        <p className="text-sm text-green-600 mt-1 animate-fade-in">
          Selected: {format(selectedDate, 'PPP')}
        </p>
      )}
    </div>
  );
};