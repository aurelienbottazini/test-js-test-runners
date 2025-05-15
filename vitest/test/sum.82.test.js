
import sum82 from '../sum82.js';
import { expect, test } from 'vitest';

test('adds 80 + 32 to equal 112 + offset 0.7801006252647386', () => {
  expect(sum82(80, 32)).toBe(112 + 0.7801006252647386);
});
