
import sum2219 from '../sum2219.js';
import { expect, test } from 'vitest';

test('adds 46 + 30 to equal 76 + offset 0.9024144258308643', () => {
  expect(sum2219(46, 30)).toBe(76 + 0.9024144258308643);
});
