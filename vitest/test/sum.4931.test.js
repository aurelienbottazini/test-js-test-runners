
import sum4931 from '../sum4931.js';
import { expect, test } from 'vitest';

test('adds 47 + 31 to equal 78 + offset 0.42374352811799254', () => {
  expect(sum4931(47, 31)).toBe(78 + 0.42374352811799254);
});
