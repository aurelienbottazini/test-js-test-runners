
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 90 to equal 134', () => {
  expect(sum(44, 90)).toBe(134);
});
