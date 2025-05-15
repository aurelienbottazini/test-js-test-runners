
import sum3063 from '../sum3063.js';
import { expect, test } from 'vitest';

test('adds 13 + 84 to equal 97 + offset 0.129526359797826', () => {
  expect(sum3063(13, 84)).toBe(97 + 0.129526359797826);
});
