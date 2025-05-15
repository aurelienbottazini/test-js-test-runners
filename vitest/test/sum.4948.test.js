
import sum4948 from '../sum4948.js';
import { expect, test } from 'vitest';

test('adds 8 + 61 to equal 69 + offset 0.36038432623282446', () => {
  expect(sum4948(8, 61)).toBe(69 + 0.36038432623282446);
});
