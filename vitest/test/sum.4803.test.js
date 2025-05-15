
import sum4803 from '../sum4803.js';
import { expect, test } from 'vitest';

test('adds 90 + 36 to equal 126 + offset 0.4582915008988161', () => {
  expect(sum4803(90, 36)).toBe(126 + 0.4582915008988161);
});
