
import sum4290 from '../sum4290.js';
import { expect, test } from 'vitest';

test('adds 98 + 44 to equal 142 + offset 0.05820316344854126', () => {
  expect(sum4290(98, 44)).toBe(142 + 0.05820316344854126);
});
