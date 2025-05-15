
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 83 to equal 176', () => {
  expect(sum(93, 83)).toBe(176);
});
