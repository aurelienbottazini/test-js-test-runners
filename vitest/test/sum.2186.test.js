
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 52 to equal 104', () => {
  expect(sum(52, 52)).toBe(104);
});
