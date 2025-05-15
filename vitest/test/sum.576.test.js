
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 28 to equal 30', () => {
  expect(sum(2, 28)).toBe(30);
});
