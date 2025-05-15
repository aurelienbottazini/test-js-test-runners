
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 17 to equal 65', () => {
  expect(sum(48, 17)).toBe(65);
});
