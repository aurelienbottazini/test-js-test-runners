
import sum3479 from '../sum3479.js';
import { expect, test } from 'vitest';

test('adds 0 + 44 to equal 44 + offset 0.529040450604087', () => {
  expect(sum3479(0, 44)).toBe(44 + 0.529040450604087);
});
