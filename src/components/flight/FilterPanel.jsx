import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { X, SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';
import {
  setPriceRange,
  toggleAirline,
  setDepartureTimeSlot,
  setStopsFilter,
  setSortOption,
  clearAllFilters,
  selectPriceRangeFilter,
  selectSelectedAirlines,
  selectDepartureTimeSlot,
  selectStopsFilter,
  selectSortOption,
  selectAvailableAirlines,
  selectPriceRange,
  selectActiveFilterCount,
} from '../../store/slices/filterSlice';

const FilterPanel = ({ isOpen, onClose, isMobile }) => {
  const dispatch = useDispatch();
  
  // Get filter values from Redux
  const priceRangeFilter = useSelector(selectPriceRangeFilter);
  const selectedAirlines = useSelector(selectSelectedAirlines);
  const departureTimeSlot = useSelector(selectDepartureTimeSlot);
  const stopsFilter = useSelector(selectStopsFilter);
  const sortOption = useSelector(selectSortOption);
  const availableAirlines = useSelector(selectAvailableAirlines);
  const priceRange = useSelector(selectPriceRange);
  const activeFilterCount = useSelector(selectActiveFilterCount);

  // Local state for price range slider
  const [localPriceRange, setLocalPriceRange] = useState(priceRangeFilter);

  const [expandedSections, setExpandedSections] = useState({
    sort: true,
    price: true,
    airlines: true,
    time: true,
    stops: true,
  });

  useEffect(() => {
    setLocalPriceRange(priceRangeFilter);
  }, [priceRangeFilter]);

  const handlePriceChange = (type, value) => {
    const newValue = parseInt(value);
    const newRange = type === 'min' 
      ? { ...localPriceRange, min: newValue }
      : { ...localPriceRange, max: newValue };
    setLocalPriceRange(newRange);
  };

  const handlePriceCommit = () => {
    dispatch(setPriceRange(localPriceRange));
  };

  const handleClearAll = () => {
    dispatch(clearAllFilters());
    setLocalPriceRange({ min: priceRange.min, max: priceRange.max });
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const FilterSection = ({ title, section, children }) => {
    const isExpanded = expandedSections[section];
    
    return (
      <div className="border-b border-gray-200 pb-4">
        <button
          onClick={() => toggleSection(section)}
          className="w-full flex items-center justify-between py-2 text-left"
        >
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
          {isMobile && (
            isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
          )}
        </button>
        <AnimatePresence initial={false}>
          {(isExpanded || !isMobile) && (
            <motion.div
              initial={isMobile ? { height: 0, opacity: 0 } : false}
              animate={{ height: 'auto', opacity: 1 }}
              exit={isMobile ? { height: 0, opacity: 0 } : {}}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-3 space-y-3">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const content = (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-red-700" />
          <h2 className="text-lg font-bold text-gray-900">Filters</h2>
          {activeFilterCount > 0 && (
            <span className="bg-red-700 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {activeFilterCount}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {activeFilterCount > 0 && (
            <button
              onClick={handleClearAll}
              className="text-xs text-red-700 hover:text-red-900 font-medium transition-colors"
            >
              Clear All
            </button>
          )}
          {isMobile && (
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Filters Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Sort Options */}
        <FilterSection title="Sort By" section="sort">
          <select
            value={sortOption}
            onChange={(e) => dispatch(setSortOption(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent text-sm"
          >
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="departure-early-late">Departure: Early to Late</option>
            <option value="departure-late-early">Departure: Late to Early</option>
            <option value="duration-shortest">Duration: Shortest First</option>
          </select>
        </FilterSection>

        {/* Price Range Filter */}
        <FilterSection title="Price Range" section="price">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-700">
                ₹{localPriceRange.min.toLocaleString()}
              </span>
              <span className="font-medium text-gray-700">
                ₹{localPriceRange.max.toLocaleString()}
              </span>
            </div>
            
            <div className="space-y-2">
              <input
                type="range"
                min={priceRange.min}
                max={priceRange.max}
                value={localPriceRange.min}
                onChange={(e) => handlePriceChange('min', e.target.value)}
                onMouseUp={handlePriceCommit}
                onTouchEnd={handlePriceCommit}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-700"
              />
              <input
                type="range"
                min={priceRange.min}
                max={priceRange.max}
                value={localPriceRange.max}
                onChange={(e) => handlePriceChange('max', e.target.value)}
                onMouseUp={handlePriceCommit}
                onTouchEnd={handlePriceCommit}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-700"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Min Price</label>
                <input
                  type="number"
                  value={localPriceRange.min}
                  onChange={(e) => handlePriceChange('min', e.target.value)}
                  onBlur={handlePriceCommit}
                  className="w-full px-2 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-700"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Max Price</label>
                <input
                  type="number"
                  value={localPriceRange.max}
                  onChange={(e) => handlePriceChange('max', e.target.value)}
                  onBlur={handlePriceCommit}
                  className="w-full px-2 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-700"
                />
              </div>
            </div>
          </div>
        </FilterSection>

        {/* Airline Filter */}
        <FilterSection title="Airlines" section="airlines">
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {availableAirlines.map((airline) => (
              <label
                key={airline}
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
              >
                <input
                  type="checkbox"
                  checked={selectedAirlines.includes(airline)}
                  onChange={() => dispatch(toggleAirline(airline))}
                  className="w-4 h-4 text-red-700 border-gray-300 rounded focus:ring-red-700 cursor-pointer"
                />
                <span className="text-sm text-gray-700">{airline}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Departure Time Filter */}
        <FilterSection title="Departure Time" section="time">
          <div className="space-y-2">
            {[
              { value: 'all', label: 'Any Time', time: '' },
              { value: 'early-morning', label: 'Early Morning', time: '12:00 AM - 6:00 AM' },
              { value: 'morning', label: 'Morning', time: '6:00 AM - 12:00 PM' },
              { value: 'afternoon', label: 'Afternoon', time: '12:00 PM - 6:00 PM' },
              { value: 'evening', label: 'Evening', time: '6:00 PM - 12:00 AM' },
            ].map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
              >
                <input
                  type="radio"
                  name="departureTime"
                  value={option.value}
                  checked={departureTimeSlot === option.value}
                  onChange={(e) => dispatch(setDepartureTimeSlot(e.target.value))}
                  className="w-4 h-4 text-red-700 border-gray-300 focus:ring-red-700 cursor-pointer"
                />
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-700">{option.label}</div>
                  {option.time && (
                    <div className="text-xs text-gray-500">{option.time}</div>
                  )}
                </div>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Stops Filter */}
        <FilterSection title="Stops" section="stops">
          <div className="space-y-2">
            {[
              { value: 'all', label: 'All Flights' },
              { value: 'non-stop', label: 'Non-stop' },
              { value: '1-stop', label: '1 Stop' },
              { value: '2-plus-stops', label: '2+ Stops' },
            ].map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
              >
                <input
                  type="radio"
                  name="stops"
                  value={option.value}
                  checked={stopsFilter === option.value}
                  onChange={(e) => dispatch(setStopsFilter(e.target.value))}
                  className="w-4 h-4 text-red-700 border-gray-300 focus:ring-red-700 cursor-pointer"
                />
                <span className="text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </FilterSection>
      </div>

      {/* Mobile Apply Button */}
      {isMobile && (
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full bg-red-700 text-white font-bold py-3 px-4 rounded-md hover:bg-red-900 transition-colors"
          >
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );

  if (isMobile) {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/50 z-40"
            />
            
            {/* Mobile Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 overflow-hidden"
            >
              {content}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }

  // Desktop Sidebar
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      {content}
    </motion.div>
  );
};

export default FilterPanel;
