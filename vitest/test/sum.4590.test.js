
import sum4590 from '../sum4590.js';
import { expect, test } from 'vitest';

test('adds 85 + 80 to equal 165 + offset 0.5283148964995691', () => {
  expect(sum4590(85, 80)).toBe(165 + 0.5283148964995691);
});
