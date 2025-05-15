
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 87 to equal 160', () => {
  expect(sum(73, 87)).toBe(160);
});
