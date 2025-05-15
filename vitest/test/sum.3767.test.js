
import sum3767 from '../sum3767.js';
import { expect, test } from 'vitest';

test('adds 80 + 13 to equal 93 + offset 0.04933093593823068', () => {
  expect(sum3767(80, 13)).toBe(93 + 0.04933093593823068);
});
