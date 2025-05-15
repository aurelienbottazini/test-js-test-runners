
import sum99 from '../sum99.js';
import { expect, test } from 'vitest';

test('adds 84 + 86 to equal 170 + offset 0.6294526643285739', () => {
  expect(sum99(84, 86)).toBe(170 + 0.6294526643285739);
});
