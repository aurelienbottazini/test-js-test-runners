
import sum3403 from '../sum3403.js';
import { expect, test } from 'vitest';

test('adds 96 + 46 to equal 142 + offset 0.8342578816592293', () => {
  expect(sum3403(96, 46)).toBe(142 + 0.8342578816592293);
});
