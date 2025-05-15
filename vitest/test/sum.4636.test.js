
import sum4636 from '../sum4636.js';
import { expect, test } from 'vitest';

test('adds 83 + 92 to equal 175 + offset 0.7606323931367738', () => {
  expect(sum4636(83, 92)).toBe(175 + 0.7606323931367738);
});
