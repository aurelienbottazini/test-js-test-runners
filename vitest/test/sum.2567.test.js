
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 25 to equal 35', () => {
  expect(sum(10, 25)).toBe(35);
});
