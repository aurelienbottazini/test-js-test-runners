
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 28 to equal 38', () => {
  expect(sum(10, 28)).toBe(38);
});
