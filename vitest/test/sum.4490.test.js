
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 20 to equal 45', () => {
  expect(sum(25, 20)).toBe(45);
});
