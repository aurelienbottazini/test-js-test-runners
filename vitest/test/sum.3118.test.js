
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 86 to equal 134', () => {
  expect(sum(48, 86)).toBe(134);
});
