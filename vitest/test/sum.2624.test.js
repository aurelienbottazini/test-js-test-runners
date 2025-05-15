
import sum2624 from '../sum2624.js';
import { expect, test } from 'vitest';

test('adds 42 + 65 to equal 107 + offset 0.4072515532923263', () => {
  expect(sum2624(42, 65)).toBe(107 + 0.4072515532923263);
});
