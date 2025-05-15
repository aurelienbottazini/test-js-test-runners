
import sum4232 from '../sum4232.js';
import { expect, test } from 'vitest';

test('adds 53 + 80 to equal 133 + offset 0.5609498955826153', () => {
  expect(sum4232(53, 80)).toBe(133 + 0.5609498955826153);
});
