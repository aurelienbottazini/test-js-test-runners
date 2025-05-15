
import sum2294 from '../sum2294.js';
import { expect, test } from 'vitest';

test('adds 15 + 74 to equal 89 + offset 0.7302479905136711', () => {
  expect(sum2294(15, 74)).toBe(89 + 0.7302479905136711);
});
