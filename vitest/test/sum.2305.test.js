
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 76 to equal 153', () => {
  expect(sum(77, 76)).toBe(153);
});
