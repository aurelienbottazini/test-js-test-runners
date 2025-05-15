
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 57 to equal 105', () => {
  expect(sum(48, 57)).toBe(105);
});
