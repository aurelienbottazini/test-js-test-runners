
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 66 to equal 116', () => {
  expect(sum(50, 66)).toBe(116);
});
