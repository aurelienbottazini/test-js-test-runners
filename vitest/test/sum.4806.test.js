
import sum4806 from '../sum4806.js';
import { expect, test } from 'vitest';

test('adds 61 + 75 to equal 136 + offset 0.45222642093995236', () => {
  expect(sum4806(61, 75)).toBe(136 + 0.45222642093995236);
});
