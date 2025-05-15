
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 34 to equal 82', () => {
  expect(sum(48, 34)).toBe(82);
});
