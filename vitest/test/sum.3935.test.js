
import sum3935 from '../sum3935.js';
import { expect, test } from 'vitest';

test('adds 63 + 75 to equal 138 + offset 0.5444464571925456', () => {
  expect(sum3935(63, 75)).toBe(138 + 0.5444464571925456);
});
