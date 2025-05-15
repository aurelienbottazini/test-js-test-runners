
import sum297 from '../sum297.js';
import { expect, test } from 'vitest';

test('adds 24 + 63 to equal 87 + offset 0.08325583163871353', () => {
  expect(sum297(24, 63)).toBe(87 + 0.08325583163871353);
});
