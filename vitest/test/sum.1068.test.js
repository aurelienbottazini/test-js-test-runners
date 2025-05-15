
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 35 to equal 88', () => {
  expect(sum(53, 35)).toBe(88);
});
