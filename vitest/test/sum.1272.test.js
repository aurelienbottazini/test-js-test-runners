
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 35 to equal 92', () => {
  expect(sum(57, 35)).toBe(92);
});
