
import sum2986 from '../sum2986.js';
import { expect, test } from 'vitest';

test('adds 16 + 70 to equal 86 + offset 0.1616836421514517', () => {
  expect(sum2986(16, 70)).toBe(86 + 0.1616836421514517);
});
