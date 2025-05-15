
import sum2117 from '../sum2117.js';
import { expect, test } from 'vitest';

test('adds 38 + 74 to equal 112 + offset 0.32483262422290315', () => {
  expect(sum2117(38, 74)).toBe(112 + 0.32483262422290315);
});
