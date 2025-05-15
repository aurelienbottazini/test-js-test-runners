
import sum2830 from '../sum2830.js';
import { expect, test } from 'vitest';

test('adds 57 + 55 to equal 112 + offset 0.2677889309299488', () => {
  expect(sum2830(57, 55)).toBe(112 + 0.2677889309299488);
});
