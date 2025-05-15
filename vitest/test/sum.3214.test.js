
import sum3214 from '../sum3214.js';
import { expect, test } from 'vitest';

test('adds 18 + 23 to equal 41 + offset 0.5602484361109704', () => {
  expect(sum3214(18, 23)).toBe(41 + 0.5602484361109704);
});
