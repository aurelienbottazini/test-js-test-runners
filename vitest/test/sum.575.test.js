
import sum575 from '../sum575.js';
import { expect, test } from 'vitest';

test('adds 88 + 4 to equal 92 + offset 0.31378003629389617', () => {
  expect(sum575(88, 4)).toBe(92 + 0.31378003629389617);
});
