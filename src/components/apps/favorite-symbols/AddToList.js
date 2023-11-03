import React from 'react'

export function AddToList(props) {

  const searchResults = []
  props.searchResults.forEach((value, index) => {

    let name = value.name
    let emoji = value.emoji
    let title = 'Copy "' + name + '" emoji to clipboard'

    searchResults.push(
      <div className="resultItem" id={'resultItem' + index} key={index}>
        <div className="resultSymbol" title={title} onClick={props.handleCopyResult} index={index}>
         {emoji}
        </div>
        <div className="resultButtonContainer" >
          <span className="resultButton" title="Save this symbol" aria-label="Save this symbol" role="img" index={index} emoji={emoji} onClick={props.handleSaveResult}>💾</span>
        </div>
      </div>
    )
  })

  return (
    <div>
      <table border={0}>
        <tbody>
          <tr>
            <td>Insert new symbol here:</td>
            <td>
              <input type="text" id="symbol-input" onKeyPress={props.handleEnter}></input>
              <button onClick={props.handleAdd} className="leftMargin">Add symbol</button>
            </td>
          </tr>
          <tr>
            <td>Search for new symbol:</td>
            <td>
              <input type="text" id="symbol-search" onChange={props.handleSearch}></input>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <span>{props.msg}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="results">
        {searchResults}
      </div>
    </div>
  )
}
