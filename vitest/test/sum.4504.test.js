
import sum4504 from '../sum4504.js';
import { expect, test } from 'vitest';

test('adds 60 + 57 to equal 117 + offset 0.08208347762020296', () => {
  expect(sum4504(60, 57)).toBe(117 + 0.08208347762020296);
});
