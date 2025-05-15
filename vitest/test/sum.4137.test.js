
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 28 to equal 33', () => {
  expect(sum(5, 28)).toBe(33);
});
