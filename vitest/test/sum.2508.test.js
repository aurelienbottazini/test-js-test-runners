
import sum2508 from '../sum2508.js';
import { expect, test } from 'vitest';

test('adds 39 + 30 to equal 69 + offset 0.7004769566288093', () => {
  expect(sum2508(39, 30)).toBe(69 + 0.7004769566288093);
});
