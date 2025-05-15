
import sum4435 from '../sum4435.js';
import { expect, test } from 'vitest';

test('adds 52 + 37 to equal 89 + offset 0.3150227705813715', () => {
  expect(sum4435(52, 37)).toBe(89 + 0.3150227705813715);
});
