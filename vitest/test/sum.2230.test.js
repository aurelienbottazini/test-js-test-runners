
import sum2230 from '../sum2230.js';
import { expect, test } from 'vitest';

test('adds 16 + 11 to equal 27 + offset 0.8407139646622419', () => {
  expect(sum2230(16, 11)).toBe(27 + 0.8407139646622419);
});
