
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 88 to equal 170', () => {
  expect(sum(82, 88)).toBe(170);
});
