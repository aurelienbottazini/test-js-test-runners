
import sum4773 from '../sum4773.js';
import { expect, test } from 'vitest';

test('adds 20 + 18 to equal 38 + offset 0.34383955755431084', () => {
  expect(sum4773(20, 18)).toBe(38 + 0.34383955755431084);
});
