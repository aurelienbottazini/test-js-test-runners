
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 71 to equal 112', () => {
  expect(sum(41, 71)).toBe(112);
});
