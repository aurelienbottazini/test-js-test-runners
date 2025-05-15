
import sum4604 from '../sum4604.js';
import { expect, test } from 'vitest';

test('adds 40 + 4 to equal 44 + offset 0.6400547996074049', () => {
  expect(sum4604(40, 4)).toBe(44 + 0.6400547996074049);
});
