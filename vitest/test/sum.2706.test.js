
import sum2706 from '../sum2706.js';
import { expect, test } from 'vitest';

test('adds 27 + 41 to equal 68 + offset 0.357977921326988', () => {
  expect(sum2706(27, 41)).toBe(68 + 0.357977921326988);
});
