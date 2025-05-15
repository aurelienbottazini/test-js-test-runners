
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 66 to equal 136', () => {
  expect(sum(70, 66)).toBe(136);
});
