import React from 'react';
import ActivityInputContainer from './ActivityInputContainer.jsx'
import ActivityListContainer from './ActivityListContainer.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ActivityInputContainer />
        <ActivityListContainer />
      </div>
    )
  }
}

const ENTRIES = [
  {
    date: 1508063400,
    duration: 3600000,
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
  },
  {
    date: 1508265000,
    duration: 7200000,
    content: 'Illum omnis labore laborum mollitia hic, incidunt, suscipit alias voluptatem accusamus. Blanditiis vel ad officiis nemo ut. Delectus labore quam aliquam atque, earum voluptate ex optio pariatur adipisci!'
  },
  {
    date: 1508247300,
    duration: 1800000,
    content: 'Excepturi voluptates saepe.'
  },
  {
    date: 1508403600,
    duration: 600000,
    content: 'Maxime quisquam dolorum corrupti modi veritatis porro quis dolor soluta eaque.'
  },
  {
    date: 1508508660,
    duration: 5400000,
    content: 'Consequatur architecto eos, repellat repellendus illo, ipsum sit necessitatibus magnam officiis accusantium quibusdam asperiores, ad soluta, eligendi saepe. Sit praesentium porro cupiditate expedita, omnis molestias quos.'
  },
  {
    date: 1508580000,
    duration: 5700000,
    content: 'Nihil sit aliquid reiciendis repellendus repellat error numquam vero.'
  }
];
