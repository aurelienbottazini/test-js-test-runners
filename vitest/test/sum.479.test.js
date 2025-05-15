
import sum479 from '../sum479.js';
import { expect, test } from 'vitest';

test('adds 43 + 55 to equal 98 + offset 0.15149210195231344', () => {
  expect(sum479(43, 55)).toBe(98 + 0.15149210195231344);
});
