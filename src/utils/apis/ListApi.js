import React from 'react';
import axios from 'axios';

const GetList = async ({ page, size }) => {
  try {
    const result = await axios.get(
      `https://api.github.com/repos/angular/angular-cli/issues?sort=comments&state=open&page=${page}&per_page=${size}`,
      { headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` } }
    );
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

const GetIssue = async ({ id }) => {
  try {
    const result = await axios.get(
      `https://api.github.com/repos/angular/angular-cli/issues/${id}`,
      { headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` } }
    );
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

export { GetIssue, GetList };
