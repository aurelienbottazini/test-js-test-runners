
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 72 to equal 131', () => {
  expect(sum(59, 72)).toBe(131);
});
