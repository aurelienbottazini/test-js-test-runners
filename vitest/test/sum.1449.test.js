
import sum1449 from '../sum1449.js';
import { expect, test } from 'vitest';

test('adds 88 + 43 to equal 131 + offset 0.4233122925857381', () => {
  expect(sum1449(88, 43)).toBe(131 + 0.4233122925857381);
});
