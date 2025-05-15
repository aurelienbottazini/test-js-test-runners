
import sum1693 from '../sum1693.js';
import { expect, test } from 'vitest';

test('adds 87 + 11 to equal 98 + offset 0.3603634371428154', () => {
  expect(sum1693(87, 11)).toBe(98 + 0.3603634371428154);
});
