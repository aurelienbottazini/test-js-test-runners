
import sum3280 from '../sum3280.js';
import { expect, test } from 'vitest';

test('adds 51 + 39 to equal 90 + offset 0.7667358084206557', () => {
  expect(sum3280(51, 39)).toBe(90 + 0.7667358084206557);
});
