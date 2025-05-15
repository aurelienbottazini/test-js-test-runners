
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 75 to equal 161', () => {
  expect(sum(86, 75)).toBe(161);
});
