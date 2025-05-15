
import sum2635 from '../sum2635.js';
import { expect, test } from 'vitest';

test('adds 70 + 21 to equal 91 + offset 0.27414807782734885', () => {
  expect(sum2635(70, 21)).toBe(91 + 0.27414807782734885);
});
