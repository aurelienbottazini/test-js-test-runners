
import sum4502 from '../sum4502.js';
import { expect, test } from 'vitest';

test('adds 29 + 8 to equal 37 + offset 0.7863083577048474', () => {
  expect(sum4502(29, 8)).toBe(37 + 0.7863083577048474);
});
