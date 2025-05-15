
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 29 to equal 38', () => {
  expect(sum(9, 29)).toBe(38);
});
