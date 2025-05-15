
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 72 to equal 158', () => {
  expect(sum(86, 72)).toBe(158);
});
