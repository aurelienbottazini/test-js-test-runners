
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 79 to equal 136', () => {
  expect(sum(57, 79)).toBe(136);
});
