
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 33 to equal 35', () => {
  expect(sum(2, 33)).toBe(35);
});
