
import sum3740 from '../sum3740.js';
import { expect, test } from 'vitest';

test('adds 31 + 7 to equal 38 + offset 0.3917083926122188', () => {
  expect(sum3740(31, 7)).toBe(38 + 0.3917083926122188);
});
