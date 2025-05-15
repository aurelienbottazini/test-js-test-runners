
import sum2010 from '../sum2010.js';
import { expect, test } from 'vitest';

test('adds 47 + 86 to equal 133 + offset 0.8588109594639817', () => {
  expect(sum2010(47, 86)).toBe(133 + 0.8588109594639817);
});
