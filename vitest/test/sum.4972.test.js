
import sum4972 from '../sum4972.js';
import { expect, test } from 'vitest';

test('adds 11 + 38 to equal 49 + offset 0.27648094063179574', () => {
  expect(sum4972(11, 38)).toBe(49 + 0.27648094063179574);
});
