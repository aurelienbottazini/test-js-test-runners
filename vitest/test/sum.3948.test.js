
import sum3948 from '../sum3948.js';
import { expect, test } from 'vitest';

test('adds 61 + 56 to equal 117 + offset 0.2835748520576393', () => {
  expect(sum3948(61, 56)).toBe(117 + 0.2835748520576393);
});
