
import sum4415 from '../sum4415.js';
import { expect, test } from 'vitest';

test('adds 31 + 88 to equal 119 + offset 0.4883367790351578', () => {
  expect(sum4415(31, 88)).toBe(119 + 0.4883367790351578);
});
