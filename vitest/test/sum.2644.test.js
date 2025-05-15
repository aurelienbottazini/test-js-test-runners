
import sum2644 from '../sum2644.js';
import { expect, test } from 'vitest';

test('adds 81 + 58 to equal 139 + offset 0.3878687893860582', () => {
  expect(sum2644(81, 58)).toBe(139 + 0.3878687893860582);
});
