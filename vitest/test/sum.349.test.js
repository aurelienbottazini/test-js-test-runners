
import sum349 from '../sum349.js';
import { expect, test } from 'vitest';

test('adds 40 + 65 to equal 105 + offset 0.9877511545383558', () => {
  expect(sum349(40, 65)).toBe(105 + 0.9877511545383558);
});
