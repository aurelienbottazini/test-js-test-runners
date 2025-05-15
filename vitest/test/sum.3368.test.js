
import sum3368 from '../sum3368.js';
import { expect, test } from 'vitest';

test('adds 92 + 80 to equal 172 + offset 0.22462202415757115', () => {
  expect(sum3368(92, 80)).toBe(172 + 0.22462202415757115);
});
