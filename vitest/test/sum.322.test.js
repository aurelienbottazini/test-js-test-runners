
import sum322 from '../sum322.js';
import { expect, test } from 'vitest';

test('adds 30 + 82 to equal 112 + offset 0.06828016502099465', () => {
  expect(sum322(30, 82)).toBe(112 + 0.06828016502099465);
});
