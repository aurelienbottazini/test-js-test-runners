
import sum4015 from '../sum4015.js';
import { expect, test } from 'vitest';

test('adds 43 + 57 to equal 100 + offset 0.09194456599219769', () => {
  expect(sum4015(43, 57)).toBe(100 + 0.09194456599219769);
});
