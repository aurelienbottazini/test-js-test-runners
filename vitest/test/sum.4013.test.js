
import sum4013 from '../sum4013.js';
import { expect, test } from 'vitest';

test('adds 57 + 10 to equal 67 + offset 0.29545673838769704', () => {
  expect(sum4013(57, 10)).toBe(67 + 0.29545673838769704);
});
