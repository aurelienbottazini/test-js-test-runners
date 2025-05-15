
import sum2556 from '../sum2556.js';
import { expect, test } from 'vitest';

test('adds 98 + 35 to equal 133 + offset 0.908505238203772', () => {
  expect(sum2556(98, 35)).toBe(133 + 0.908505238203772);
});
