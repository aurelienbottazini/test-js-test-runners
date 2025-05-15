
import sum3314 from '../sum3314.js';
import { expect, test } from 'vitest';

test('adds 7 + 67 to equal 74 + offset 0.5929236633339796', () => {
  expect(sum3314(7, 67)).toBe(74 + 0.5929236633339796);
});
