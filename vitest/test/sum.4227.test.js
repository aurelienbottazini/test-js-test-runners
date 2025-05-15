
import sum4227 from '../sum4227.js';
import { expect, test } from 'vitest';

test('adds 65 + 18 to equal 83 + offset 0.07882481951919984', () => {
  expect(sum4227(65, 18)).toBe(83 + 0.07882481951919984);
});
