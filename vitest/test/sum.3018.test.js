
import sum3018 from '../sum3018.js';
import { expect, test } from 'vitest';

test('adds 65 + 55 to equal 120 + offset 0.11952533849516334', () => {
  expect(sum3018(65, 55)).toBe(120 + 0.11952533849516334);
});
