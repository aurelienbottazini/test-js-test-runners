
import sum4497 from '../sum4497.js';
import { expect, test } from 'vitest';

test('adds 71 + 65 to equal 136 + offset 0.5971669597984911', () => {
  expect(sum4497(71, 65)).toBe(136 + 0.5971669597984911);
});
