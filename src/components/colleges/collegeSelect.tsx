'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FiSearch, FiChevronDown } from 'react-icons/fi';

const OTHER_COLLEGE = { college: 'Other', State: '' };

interface CollegeSearchSelectProps {
  colleges: { college: string; State: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

export default function CollegeSearchSelect({
  colleges,
  value,
  onChange,
  placeholder = 'Select your college/university',
  required = false,
}: CollegeSearchSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [isOther, setIsOther] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const customInputRef = useRef<HTMLInputElement>(null);

  const listedColleges = colleges.filter(
    (college) => college.college.toLowerCase() !== 'other'
  );

  useEffect(() => {
    const inList = colleges.some(
      (college) =>
        college.college === value && college.college.toLowerCase() !== 'other'
    );
    if (value && inList) {
      setIsOther(false);
    } else if (value && !inList) {
      setIsOther(true);
    }
  }, [value, colleges]);

  // Filter colleges based on search term, always keep Other at the bottom
  const filteredColleges = [
    ...listedColleges.filter((college) =>
      college.college.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    OTHER_COLLEGE,
  ];

  // Handle clicking outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm('');
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredColleges.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredColleges.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (
          highlightedIndex >= 0 &&
          highlightedIndex < filteredColleges.length
        ) {
          handleSelect(filteredColleges[highlightedIndex].college);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSearchTerm('');
        setHighlightedIndex(-1);
        break;
    }
  };

  const handleSelect = (college: string) => {
    if (college === OTHER_COLLEGE.college) {
      setIsOther(true);
      onChange('');
      setIsOpen(false);
      setSearchTerm('');
      setHighlightedIndex(-1);
      setTimeout(() => customInputRef.current?.focus(), 0);
      return;
    }

    setIsOther(false);
    onChange(college);
    setIsOpen(false);
    setSearchTerm('');
    setHighlightedIndex(-1);
  };

  const handleInputClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setSearchTerm('');
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Display Input */}
      <div
        className="bg-gray-800 text-white w-full py-3 px-10 rounded-lg focus-within:ring-2 focus-within:ring-yellow-500 cursor-pointer relative"
        onClick={handleInputClick}
      >
        <FiSearch className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2 z-10" />
        <input
          ref={inputRef}
          type="text"
          value={isOpen ? searchTerm : isOther ? 'Other' : value}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent text-white w-full outline-none cursor-pointer"
          placeholder={(!isOpen && isOther ? 'Other' : value) || placeholder}
          readOnly={!isOpen}
          required={required && !isOther}
          autoComplete="new-password"
          autoCorrect="off"
          spellCheck={false}
        />
        <FiChevronDown
          className={`text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-20 w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto scrollbar-overlay">
          {filteredColleges.map((college, index) => (
            <div
              key={`${college.college}-${index}`}
              className={`px-4 py-3 cursor-pointer transition-colors ${
                college.college === OTHER_COLLEGE.college ? 'border-t border-gray-700' : ''
              } ${
                index === highlightedIndex
                  ? 'bg-yellow-500 text-black'
                  : 'text-white hover:bg-gray-700'
              }`}
              onClick={() => handleSelect(college.college)}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              {college.college}
              {college.college === OTHER_COLLEGE.college && (
                <span className="block text-xs opacity-70">
                  College not listed? Type it after selecting
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      {isOther && (
        <input
          ref={customInputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-2 bg-gray-800 text-white w-full py-3 px-4 rounded-lg outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Enter your college/university name"
          required={required}
          autoComplete="off"
        />
      )}
    </div>
  );
}
