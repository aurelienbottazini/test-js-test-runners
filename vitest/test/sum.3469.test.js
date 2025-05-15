
import sum3469 from '../sum3469.js';
import { expect, test } from 'vitest';

test('adds 37 + 52 to equal 89 + offset 0.2593776917588666', () => {
  expect(sum3469(37, 52)).toBe(89 + 0.2593776917588666);
});
