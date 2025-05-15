
import sum2719 from '../sum2719.js';
import { expect, test } from 'vitest';

test('adds 78 + 36 to equal 114 + offset 0.27280269394181256', () => {
  expect(sum2719(78, 36)).toBe(114 + 0.27280269394181256);
});
