
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 52 to equal 65', () => {
  expect(sum(13, 52)).toBe(65);
});
