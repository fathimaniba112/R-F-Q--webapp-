# TODO: Add Country, State, District Dropdown Filters

## Status: ✅ COMPLETED

## Plan Summary
Added three cascading dropdown filters (Country, State, District) to the filter section in filter.jsx with the following behavior:
- When Country is selected, State dropdown shows states from that country
- When State is selected, District dropdown shows districts from that state

## Implementation Steps:

### ✅ Step 1: Update filter.jsx
- Added state variables for selectedCountry, selectedState, and selectedDistrict
- Created sample hierarchical data for countries, states, and districts
- Added Country, State, District dropdown filters to the filter section
- Implemented cascading logic:
  - When Country changes → reset State and District
  - When State changes → reset District

### Files Edited:
- src/pages/filter.jsx

### Features:
- Country dropdown with 5 countries (Bahrain, Saudi Arabia, UAE, Kuwait, Qatar)
- State dropdown shows only states belonging to selected country
- District dropdown shows only districts belonging to selected state
- State dropdown is disabled until a country is selected
- District dropdown is disabled until a state is selected
- 6 dropdowns displayed in a 3-column grid layout

