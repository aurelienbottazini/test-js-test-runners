
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 52 to equal 88', () => {
  expect(sum(36, 52)).toBe(88);
});
