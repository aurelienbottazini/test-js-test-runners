
import sum2198 from '../sum2198.js';
import { expect, test } from 'vitest';

test('adds 55 + 6 to equal 61 + offset 0.6746068210231007', () => {
  expect(sum2198(55, 6)).toBe(61 + 0.6746068210231007);
});
