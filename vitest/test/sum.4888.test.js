
import sum4888 from '../sum4888.js';
import { expect, test } from 'vitest';

test('adds 69 + 28 to equal 97 + offset 0.9801722772249971', () => {
  expect(sum4888(69, 28)).toBe(97 + 0.9801722772249971);
});
