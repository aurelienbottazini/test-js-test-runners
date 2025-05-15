
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 71 to equal 132', () => {
  expect(sum(61, 71)).toBe(132);
});
