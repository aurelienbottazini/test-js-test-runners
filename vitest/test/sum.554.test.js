
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 70 to equal 154', () => {
  expect(sum(84, 70)).toBe(154);
});
