
import sum4759 from '../sum4759.js';
import { expect, test } from 'vitest';

test('adds 46 + 45 to equal 91 + offset 0.760125727384517', () => {
  expect(sum4759(46, 45)).toBe(91 + 0.760125727384517);
});
