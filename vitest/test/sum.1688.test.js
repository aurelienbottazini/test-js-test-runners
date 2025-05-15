
import sum1688 from '../sum1688.js';
import { expect, test } from 'vitest';

test('adds 24 + 86 to equal 110 + offset 0.22313616966249294', () => {
  expect(sum1688(24, 86)).toBe(110 + 0.22313616966249294);
});
