
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 61 to equal 120', () => {
  expect(sum(59, 61)).toBe(120);
});
