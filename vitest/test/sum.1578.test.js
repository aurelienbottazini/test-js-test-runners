
import sum1578 from '../sum1578.js';
import { expect, test } from 'vitest';

test('adds 39 + 11 to equal 50 + offset 0.596203790535932', () => {
  expect(sum1578(39, 11)).toBe(50 + 0.596203790535932);
});
