
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 90 to equal 144', () => {
  expect(sum(54, 90)).toBe(144);
});
