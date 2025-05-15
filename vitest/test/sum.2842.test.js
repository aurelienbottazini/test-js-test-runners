
import sum2842 from '../sum2842.js';
import { expect, test } from 'vitest';

test('adds 90 + 22 to equal 112 + offset 0.9417538799040366', () => {
  expect(sum2842(90, 22)).toBe(112 + 0.9417538799040366);
});
