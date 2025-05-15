
import sum4852 from '../sum4852.js';
import { expect, test } from 'vitest';

test('adds 36 + 90 to equal 126 + offset 0.2608655646259168', () => {
  expect(sum4852(36, 90)).toBe(126 + 0.2608655646259168);
});
