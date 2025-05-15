
import sum2000 from '../sum2000.js';
import { expect, test } from 'vitest';

test('adds 49 + 85 to equal 134 + offset 0.4089500666445143', () => {
  expect(sum2000(49, 85)).toBe(134 + 0.4089500666445143);
});
