
import sum3358 from '../sum3358.js';
import { expect, test } from 'vitest';

test('adds 95 + 67 to equal 162 + offset 0.4856610461713491', () => {
  expect(sum3358(95, 67)).toBe(162 + 0.4856610461713491);
});
