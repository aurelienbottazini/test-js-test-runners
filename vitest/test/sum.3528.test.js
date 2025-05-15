
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 50 to equal 146', () => {
  expect(sum(96, 50)).toBe(146);
});
