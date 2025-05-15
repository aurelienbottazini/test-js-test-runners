
import sum2144 from '../sum2144.js';
import { expect, test } from 'vitest';

test('adds 21 + 74 to equal 95 + offset 0.2940938187832052', () => {
  expect(sum2144(21, 74)).toBe(95 + 0.2940938187832052);
});
