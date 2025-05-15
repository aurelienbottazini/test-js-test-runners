
import sum980 from '../sum980.js';
import { expect, test } from 'vitest';

test('adds 40 + 58 to equal 98 + offset 0.8873403207787087', () => {
  expect(sum980(40, 58)).toBe(98 + 0.8873403207787087);
});
