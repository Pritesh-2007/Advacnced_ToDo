import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TodayPage from '../pages/TodayPage';
import ImportantPage from '../pages/ImportantPage';
import ScheduledPage from '../pages/ScheduledPage';
import ListPage from '../pages/ListPage';
import CompletedPage from '../pages/CompletedPage';

const Todoroutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/today" element={<TodayPage />} />
    <Route path="/important" element={<ImportantPage />} />
    <Route path="/scheduled" element={<ScheduledPage />} />
    <Route path="/list/:listId" element={<ListPage />} />
    <Route path="/completed" element={<CompletedPage />} />
  </Routes>
);
export default Todoroutes;