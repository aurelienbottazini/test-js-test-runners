
import sum4775 from '../sum4775.js';
import { expect, test } from 'vitest';

test('adds 32 + 48 to equal 80 + offset 0.26050954214016575', () => {
  expect(sum4775(32, 48)).toBe(80 + 0.26050954214016575);
});
