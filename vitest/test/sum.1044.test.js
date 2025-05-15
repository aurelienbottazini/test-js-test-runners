
import sum1044 from '../sum1044.js';
import { expect, test } from 'vitest';

test('adds 84 + 37 to equal 121 + offset 0.6349244315338791', () => {
  expect(sum1044(84, 37)).toBe(121 + 0.6349244315338791);
});
