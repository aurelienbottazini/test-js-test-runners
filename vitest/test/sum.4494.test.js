
import sum4494 from '../sum4494.js';
import { expect, test } from 'vitest';

test('adds 70 + 14 to equal 84 + offset 0.8333353126395562', () => {
  expect(sum4494(70, 14)).toBe(84 + 0.8333353126395562);
});
