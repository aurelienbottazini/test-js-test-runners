
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 90 to equal 161', () => {
  expect(sum(71, 90)).toBe(161);
});
