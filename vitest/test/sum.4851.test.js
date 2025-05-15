
import sum4851 from '../sum4851.js';
import { expect, test } from 'vitest';

test('adds 28 + 13 to equal 41 + offset 0.7082959264253463', () => {
  expect(sum4851(28, 13)).toBe(41 + 0.7082959264253463);
});
