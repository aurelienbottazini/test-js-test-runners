
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 20 to equal 49', () => {
  expect(sum(29, 20)).toBe(49);
});
