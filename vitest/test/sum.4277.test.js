
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 32 to equal 51', () => {
  expect(sum(19, 32)).toBe(51);
});
