
import sum4087 from '../sum4087.js';
import { expect, test } from 'vitest';

test('adds 1 + 89 to equal 90 + offset 0.5783112597529316', () => {
  expect(sum4087(1, 89)).toBe(90 + 0.5783112597529316);
});
