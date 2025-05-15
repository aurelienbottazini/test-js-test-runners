
import sum4211 from '../sum4211.js';
import { expect, test } from 'vitest';

test('adds 16 + 28 to equal 44 + offset 0.1405939169208824', () => {
  expect(sum4211(16, 28)).toBe(44 + 0.1405939169208824);
});
