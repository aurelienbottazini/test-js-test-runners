
import sum3089 from '../sum3089.js';
import { expect, test } from 'vitest';

test('adds 36 + 58 to equal 94 + offset 0.12374542225879226', () => {
  expect(sum3089(36, 58)).toBe(94 + 0.12374542225879226);
});
