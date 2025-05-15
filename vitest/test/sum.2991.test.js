
import sum2991 from '../sum2991.js';
import { expect, test } from 'vitest';

test('adds 73 + 55 to equal 128 + offset 0.10254063419273907', () => {
  expect(sum2991(73, 55)).toBe(128 + 0.10254063419273907);
});
