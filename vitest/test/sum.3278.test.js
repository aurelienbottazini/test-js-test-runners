
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 77 to equal 153', () => {
  expect(sum(76, 77)).toBe(153);
});
