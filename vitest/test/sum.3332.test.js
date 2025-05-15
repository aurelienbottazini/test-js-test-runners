
import sum3332 from '../sum3332.js';
import { expect, test } from 'vitest';

test('adds 99 + 49 to equal 148 + offset 0.03836673881435293', () => {
  expect(sum3332(99, 49)).toBe(148 + 0.03836673881435293);
});
