
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 72 to equal 161', () => {
  expect(sum(89, 72)).toBe(161);
});
