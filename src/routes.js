import Bacon from './actions/bacon'
import bobolo from './actions/bobolo'
import Cheese from './actions/cheese'
import Hi from './actions/hi'
import Pasta from './actions/pasta'
import Pizza from './actions/pizza'
import plantain from './actions/plantain'
import Sausage from './actions/sausage'
import Tomato from './actions/tomato'
import Ndole from './actions/ndole'


export const routes = [
  {
    path: 'hi',
    text: /^hi$/i,
    action: Hi,
    childRoutes: [
      {
        path: 'pizza',
        payload: /^pizza$/i,
        action: Pizza,
        childRoutes: [
          { path: 'sausage', payload: /^sausage$/i, action: Sausage },
          { path: 'bacon', payload: /^bacon$/i, action: Bacon },
        ],
      },
      {
        path: 'pasta',
        payload: /^pasta$/i,
        action: Pasta,
        childRoutes: [
          { path: 'cheese', payload: /^cheese$/i, action: Cheese },
          { path: 'tomato', payload: /^tomato$/i, action: Tomato },
        ],
      },
      {
        path: 'ndole',
        payload: /^ndole$/i,
        action: Ndole,
        childRoutes: [
          { path: 'plantain', payload: /^plantain$/i, action: plantain },
          { path: 'baton', payload: /^bobolo$/i, action: bobolo },
        ],
      },
    ],
  },
]
