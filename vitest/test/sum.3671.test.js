
import sum3671 from '../sum3671.js';
import { expect, test } from 'vitest';

test('adds 15 + 86 to equal 101 + offset 0.18716237932189905', () => {
  expect(sum3671(15, 86)).toBe(101 + 0.18716237932189905);
});
