
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 35 to equal 38', () => {
  expect(sum(3, 35)).toBe(38);
});
