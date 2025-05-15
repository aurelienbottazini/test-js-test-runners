
import sum4458 from '../sum4458.js';
import { expect, test } from 'vitest';

test('adds 28 + 42 to equal 70 + offset 0.45318953064569334', () => {
  expect(sum4458(28, 42)).toBe(70 + 0.45318953064569334);
});
