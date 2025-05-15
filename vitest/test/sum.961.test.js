
import sum961 from '../sum961.js';
import { expect, test } from 'vitest';

test('adds 58 + 92 to equal 150 + offset 0.29481317920094097', () => {
  expect(sum961(58, 92)).toBe(150 + 0.29481317920094097);
});
