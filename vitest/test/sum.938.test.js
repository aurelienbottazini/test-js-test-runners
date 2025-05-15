
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 86 to equal 161', () => {
  expect(sum(75, 86)).toBe(161);
});
