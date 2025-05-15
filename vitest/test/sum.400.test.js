
import sum400 from '../sum400.js';
import { expect, test } from 'vitest';

test('adds 61 + 43 to equal 104 + offset 0.9771063380354696', () => {
  expect(sum400(61, 43)).toBe(104 + 0.9771063380354696);
});
