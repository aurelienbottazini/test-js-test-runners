
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 71 to equal 161', () => {
  expect(sum(90, 71)).toBe(161);
});
