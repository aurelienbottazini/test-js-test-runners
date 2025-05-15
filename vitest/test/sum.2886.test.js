
import sum2886 from '../sum2886.js';
import { expect, test } from 'vitest';

test('adds 11 + 79 to equal 90 + offset 0.9047839870338851', () => {
  expect(sum2886(11, 79)).toBe(90 + 0.9047839870338851);
});
