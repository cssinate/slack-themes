import React from 'react';
import ThemeItem from '../ThemeItem';

const ThemeList = ({data, neutralNav, themeLabel, updateQueryAmount, dataSize}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {
          data.map(theme => (
            <div key={Math.random()}>
              <ThemeItem
                theme={theme}
                neutralNav={neutralNav}
                themeLabel={themeLabel}
                withLikes
              />
            </div>
          ))
        }
      </div>
      {
        data.length < dataSize ? (
          <div className="flex justify-center">
            <button
              className="button"
              onClick={() => updateQueryAmount()}
            >
              Show me more
            </button>
          </div>
        )
        :
        null
      }
    </>
  )
};

export default ThemeList;