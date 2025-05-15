
import sum2507 from '../sum2507.js';
import { expect, test } from 'vitest';

test('adds 67 + 82 to equal 149 + offset 0.17272333162571074', () => {
  expect(sum2507(67, 82)).toBe(149 + 0.17272333162571074);
});
