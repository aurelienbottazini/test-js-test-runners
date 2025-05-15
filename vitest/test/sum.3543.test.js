
import sum3543 from '../sum3543.js';
import { expect, test } from 'vitest';

test('adds 8 + 56 to equal 64 + offset 0.35798452749337295', () => {
  expect(sum3543(8, 56)).toBe(64 + 0.35798452749337295);
});
