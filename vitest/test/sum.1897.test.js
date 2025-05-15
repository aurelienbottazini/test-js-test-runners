
import sum1897 from '../sum1897.js';
import { expect, test } from 'vitest';

test('adds 99 + 88 to equal 187 + offset 0.7656001881966328', () => {
  expect(sum1897(99, 88)).toBe(187 + 0.7656001881966328);
});
