
import sum4250 from '../sum4250.js';
import { expect, test } from 'vitest';

test('adds 97 + 27 to equal 124 + offset 0.7777622313494157', () => {
  expect(sum4250(97, 27)).toBe(124 + 0.7777622313494157);
});
