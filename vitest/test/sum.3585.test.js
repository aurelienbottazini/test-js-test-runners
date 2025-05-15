
import sum3585 from '../sum3585.js';
import { expect, test } from 'vitest';

test('adds 37 + 56 to equal 93 + offset 0.321969224264422', () => {
  expect(sum3585(37, 56)).toBe(93 + 0.321969224264422);
});
