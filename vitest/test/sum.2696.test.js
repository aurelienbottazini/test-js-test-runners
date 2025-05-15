
import sum2696 from '../sum2696.js';
import { expect, test } from 'vitest';

test('adds 94 + 13 to equal 107 + offset 0.5180236506332889', () => {
  expect(sum2696(94, 13)).toBe(107 + 0.5180236506332889);
});
