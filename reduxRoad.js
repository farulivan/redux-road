const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0
  }
  
  const gameReducer = (state = initialWagonState, action) => {
    switch (action.type) {
      case 'gather': {
        return {
          ...state,
          supplies: state.supplies + 15,
          distance: state.distance,
          days: state.days + 1
        }
      }
      case 'travel': {
        if (state.supplies - 20 * action.payload < 0){
          return state
        } else {
          return {
            ...state,
            supplies: state.supplies - (20 * action.payload),
            distance: state.distance + (10 * action.payload),
            days: state.days + action.payload
          }
        }
      }
      case 'tippedWagon': {
        return {
          ...state,
          supplies: state.supplies - 30,
          distance: state.distance,
          days: state.days + 1
        }
      }
      default: {
        return state;
      }
    }
  }
  
  //Let's Play The Game!
  let wagon = gameReducer(undefined, {})
  console.log(`Game Start:`, wagon)
  // Day 1
  wagon = gameReducer(wagon, { type:'travel', payload:1 })
  console.log(`Day 1:`, wagon)
  // Day 2
  wagon = gameReducer(wagon, { type:'gather' })
  console.log(`Day 2:`, wagon)
  // Day 3
  wagon = gameReducer(wagon, { type:'tippedWagon' })
  console.log(`Day 3:`, wagon)
  // Day 4
  wagon = gameReducer(wagon, { type:'travel', payload:3 })
  console.log(`Day 4:`, wagon)
  // Day 5 - To test negative supplies by travel case
  wagon = gameReducer(wagon, { type:'travel', payload:3 })
  console.log(`You are out of supplies! `)
  console.log(`Day 5:`, wagon)
  // Day 6
  wagon = gameReducer(wagon, { type:'tippedWagon' })
  console.log(`Day 6:`, wagon)