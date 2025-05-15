
import sum3130 from '../sum3130.js';
import { expect, test } from 'vitest';

test('adds 25 + 58 to equal 83 + offset 0.5294284002213003', () => {
  expect(sum3130(25, 58)).toBe(83 + 0.5294284002213003);
});
