
import sum3854 from '../sum3854.js';
import { expect, test } from 'vitest';

test('adds 97 + 84 to equal 181 + offset 0.4383662182099203', () => {
  expect(sum3854(97, 84)).toBe(181 + 0.4383662182099203);
});
