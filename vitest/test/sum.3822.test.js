
import sum3822 from '../sum3822.js';
import { expect, test } from 'vitest';

test('adds 15 + 98 to equal 113 + offset 0.8640992683528002', () => {
  expect(sum3822(15, 98)).toBe(113 + 0.8640992683528002);
});
