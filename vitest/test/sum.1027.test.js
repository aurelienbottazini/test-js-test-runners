
import sum1027 from '../sum1027.js';
import { expect, test } from 'vitest';

test('adds 44 + 15 to equal 59 + offset 0.9045289382687097', () => {
  expect(sum1027(44, 15)).toBe(59 + 0.9045289382687097);
});
