
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 20 to equal 38', () => {
  expect(sum(18, 20)).toBe(38);
});
