
import sum1735 from '../sum1735.js';
import { expect, test } from 'vitest';

test('adds 38 + 58 to equal 96 + offset 0.6672857247015856', () => {
  expect(sum1735(38, 58)).toBe(96 + 0.6672857247015856);
});
