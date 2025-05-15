
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 57 to equal 134', () => {
  expect(sum(77, 57)).toBe(134);
});
