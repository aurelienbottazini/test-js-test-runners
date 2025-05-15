
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 77 to equal 134', () => {
  expect(sum(57, 77)).toBe(134);
});
