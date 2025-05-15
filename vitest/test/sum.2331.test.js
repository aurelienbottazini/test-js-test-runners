
import sum2331 from '../sum2331.js';
import { expect, test } from 'vitest';

test('adds 67 + 66 to equal 133 + offset 0.5256266025600943', () => {
  expect(sum2331(67, 66)).toBe(133 + 0.5256266025600943);
});
