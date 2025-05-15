
import sum3437 from '../sum3437.js';
import { expect, test } from 'vitest';

test('adds 5 + 32 to equal 37 + offset 0.5829866867482646', () => {
  expect(sum3437(5, 32)).toBe(37 + 0.5829866867482646);
});
