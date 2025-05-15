
import sum4732 from '../sum4732.js';
import { expect, test } from 'vitest';

test('adds 66 + 4 to equal 70 + offset 0.3674900502923212', () => {
  expect(sum4732(66, 4)).toBe(70 + 0.3674900502923212);
});
