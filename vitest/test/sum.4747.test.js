
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 66 to equal 113', () => {
  expect(sum(47, 66)).toBe(113);
});
