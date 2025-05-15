
import sum1646 from '../sum1646.js';
import { expect, test } from 'vitest';

test('adds 79 + 59 to equal 138 + offset 0.5185766067840514', () => {
  expect(sum1646(79, 59)).toBe(138 + 0.5185766067840514);
});
