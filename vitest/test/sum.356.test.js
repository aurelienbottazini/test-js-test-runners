
import sum356 from '../sum356.js';
import { expect, test } from 'vitest';

test('adds 20 + 9 to equal 29 + offset 0.7375819233971178', () => {
  expect(sum356(20, 9)).toBe(29 + 0.7375819233971178);
});
