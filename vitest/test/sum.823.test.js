
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 40 to equal 85', () => {
  expect(sum(45, 40)).toBe(85);
});
