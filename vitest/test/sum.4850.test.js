
import sum4850 from '../sum4850.js';
import { expect, test } from 'vitest';

test('adds 80 + 90 to equal 170 + offset 0.4385310808577447', () => {
  expect(sum4850(80, 90)).toBe(170 + 0.4385310808577447);
});
