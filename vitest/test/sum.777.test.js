
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 90 to equal 188', () => {
  expect(sum(98, 90)).toBe(188);
});
