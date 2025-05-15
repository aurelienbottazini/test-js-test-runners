
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 60 to equal 82', () => {
  expect(sum(22, 60)).toBe(82);
});
