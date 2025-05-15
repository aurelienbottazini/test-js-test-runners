
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 83 + 87 to equal 170', () => {
  expect(sum(83, 87)).toBe(170);
});
