
import sum942 from '../sum942.js';
import { expect, test } from 'vitest';

test('adds 53 + 90 to equal 143 + offset 0.18959573749420588', () => {
  expect(sum942(53, 90)).toBe(143 + 0.18959573749420588);
});
