
import sum2941 from '../sum2941.js';
import { expect, test } from 'vitest';

test('adds 19 + 18 to equal 37 + offset 0.6672860032349058', () => {
  expect(sum2941(19, 18)).toBe(37 + 0.6672860032349058);
});
