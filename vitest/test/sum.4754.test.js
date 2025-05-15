
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 87 to equal 113', () => {
  expect(sum(26, 87)).toBe(113);
});
