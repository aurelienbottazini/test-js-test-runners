
import sum2112 from '../sum2112.js';
import { expect, test } from 'vitest';

test('adds 34 + 0 to equal 34 + offset 0.8554000268867379', () => {
  expect(sum2112(34, 0)).toBe(34 + 0.8554000268867379);
});
