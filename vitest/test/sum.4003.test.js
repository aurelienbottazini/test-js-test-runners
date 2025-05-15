
import sum4003 from '../sum4003.js';
import { expect, test } from 'vitest';

test('adds 94 + 84 to equal 178 + offset 0.7451263169705776', () => {
  expect(sum4003(94, 84)).toBe(178 + 0.7451263169705776);
});
