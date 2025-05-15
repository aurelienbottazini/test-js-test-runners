
import sum1375 from '../sum1375.js';
import { expect, test } from 'vitest';

test('adds 81 + 26 to equal 107 + offset 0.6460664487154184', () => {
  expect(sum1375(81, 26)).toBe(107 + 0.6460664487154184);
});
