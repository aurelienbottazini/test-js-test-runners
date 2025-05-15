
import sum4257 from '../sum4257.js';
import { expect, test } from 'vitest';

test('adds 45 + 74 to equal 119 + offset 0.23036276619734664', () => {
  expect(sum4257(45, 74)).toBe(119 + 0.23036276619734664);
});
