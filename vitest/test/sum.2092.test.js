
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 68 to equal 154', () => {
  expect(sum(86, 68)).toBe(154);
});
