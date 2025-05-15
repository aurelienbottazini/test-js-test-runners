
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 97 to equal 170', () => {
  expect(sum(73, 97)).toBe(170);
});
