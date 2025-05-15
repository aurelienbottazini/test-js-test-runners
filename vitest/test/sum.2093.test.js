
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 83 + 78 to equal 161', () => {
  expect(sum(83, 78)).toBe(161);
});
