
import sum3000 from '../sum3000.js';
import { expect, test } from 'vitest';

test('adds 58 + 11 to equal 69 + offset 0.25804219078368207', () => {
  expect(sum3000(58, 11)).toBe(69 + 0.25804219078368207);
});
