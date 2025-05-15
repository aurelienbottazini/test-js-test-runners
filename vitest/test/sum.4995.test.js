
import sum4995 from '../sum4995.js';
import { expect, test } from 'vitest';

test('adds 61 + 17 to equal 78 + offset 0.9164189523786899', () => {
  expect(sum4995(61, 17)).toBe(78 + 0.9164189523786899);
});
