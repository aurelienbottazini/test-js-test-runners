
import sum2152 from '../sum2152.js';
import { expect, test } from 'vitest';

test('adds 19 + 98 to equal 117 + offset 0.5880272818776338', () => {
  expect(sum2152(19, 98)).toBe(117 + 0.5880272818776338);
});
