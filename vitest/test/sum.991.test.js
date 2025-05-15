
import sum991 from '../sum991.js';
import { expect, test } from 'vitest';

test('adds 32 + 74 to equal 106 + offset 0.8587740912632518', () => {
  expect(sum991(32, 74)).toBe(106 + 0.8587740912632518);
});
