
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 31 to equal 85', () => {
  expect(sum(54, 31)).toBe(85);
});
