
import sum60 from '../sum60.js';
import { expect, test } from 'vitest';

test('adds 83 + 63 to equal 146 + offset 0.3496579140877738', () => {
  expect(sum60(83, 63)).toBe(146 + 0.3496579140877738);
});
