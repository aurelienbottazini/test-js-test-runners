
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 70 to equal 161', () => {
  expect(sum(91, 70)).toBe(161);
});
