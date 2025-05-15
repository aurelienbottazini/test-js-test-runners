
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 70 to equal 85', () => {
  expect(sum(15, 70)).toBe(85);
});
