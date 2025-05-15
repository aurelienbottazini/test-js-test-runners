
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 71 to equal 88', () => {
  expect(sum(17, 71)).toBe(88);
});
