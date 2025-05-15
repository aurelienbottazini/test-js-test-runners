
import sum4808 from '../sum4808.js';
import { expect, test } from 'vitest';

test('adds 98 + 91 to equal 189 + offset 0.9921710383890844', () => {
  expect(sum4808(98, 91)).toBe(189 + 0.9921710383890844);
});
