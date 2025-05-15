
import sum4260 from '../sum4260.js';
import { expect, test } from 'vitest';

test('adds 69 + 4 to equal 73 + offset 0.49220714019124046', () => {
  expect(sum4260(69, 4)).toBe(73 + 0.49220714019124046);
});
