
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 35 to equal 121', () => {
  expect(sum(86, 35)).toBe(121);
});
