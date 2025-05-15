
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 52 to equal 77', () => {
  expect(sum(25, 52)).toBe(77);
});
