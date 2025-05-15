
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 57 to equal 82', () => {
  expect(sum(25, 57)).toBe(82);
});
