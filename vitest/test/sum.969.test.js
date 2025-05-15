
import sum969 from '../sum969.js';
import { expect, test } from 'vitest';

test('adds 63 + 28 to equal 91 + offset 0.7949156922513692', () => {
  expect(sum969(63, 28)).toBe(91 + 0.7949156922513692);
});
