
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 65 to equal 136', () => {
  expect(sum(71, 65)).toBe(136);
});
