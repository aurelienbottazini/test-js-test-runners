
import sum2871 from '../sum2871.js';
import { expect, test } from 'vitest';

test('adds 24 + 16 to equal 40 + offset 0.8914967717851191', () => {
  expect(sum2871(24, 16)).toBe(40 + 0.8914967717851191);
});
