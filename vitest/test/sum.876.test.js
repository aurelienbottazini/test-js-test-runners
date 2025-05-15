
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 71 to equal 147', () => {
  expect(sum(76, 71)).toBe(147);
});
