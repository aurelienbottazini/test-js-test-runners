
import sum3176 from '../sum3176.js';
import { expect, test } from 'vitest';

test('adds 80 + 64 to equal 144 + offset 0.23858312765796696', () => {
  expect(sum3176(80, 64)).toBe(144 + 0.23858312765796696);
});
