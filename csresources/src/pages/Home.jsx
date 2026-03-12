import React, { useState } from 'react'
import './Home.css'
import resources from '../data/resources'

const Home = () => {
  const [search, setSearch] = useState('');

  const filtered = resources.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description?.toLowerCase().includes(search.toLowerCase()) ||
      item.note?.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <div className="home">
      <div className="home-header">
        <h1 className="home-title">CS Resources</h1>
        <p className="home-subtitle">An index of the best computer science tools and sites to help students of all levels</p>
        <input
          className="home-search"
          type="text"
          placeholder="Search resources..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="home-content">
        {filtered.map(section => (
          <div className="section" key={section.category} id={section.id}>
            <h2 className="section-title">{section.category}</h2>
            <div className="section-list">
              {section.items.map(item => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="resource-item"
                >
                    <span className="resource-name">{item.name}</span>
                    <span className="resource-sep">—</span>
                    <span className="resource-desc">{item.description}</span>
                    {item.note && <><br /> <span className="resource-note">*{item.note}</span></>}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;