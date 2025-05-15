
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 87 to equal 110', () => {
  expect(sum(23, 87)).toBe(110);
});
