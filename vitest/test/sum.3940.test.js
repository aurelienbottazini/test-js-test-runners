
import sum3940 from '../sum3940.js';
import { expect, test } from 'vitest';

test('adds 75 + 30 to equal 105 + offset 0.6723736683514949', () => {
  expect(sum3940(75, 30)).toBe(105 + 0.6723736683514949);
});
