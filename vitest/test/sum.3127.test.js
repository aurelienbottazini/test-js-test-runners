
import sum3127 from '../sum3127.js';
import { expect, test } from 'vitest';

test('adds 40 + 70 to equal 110 + offset 0.24833308758700756', () => {
  expect(sum3127(40, 70)).toBe(110 + 0.24833308758700756);
});
