
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 52 to equal 136', () => {
  expect(sum(84, 52)).toBe(136);
});
