
import sum4666 from '../sum4666.js';
import { expect, test } from 'vitest';

test('adds 54 + 8 to equal 62 + offset 0.5644782819552593', () => {
  expect(sum4666(54, 8)).toBe(62 + 0.5644782819552593);
});
