
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 93 to equal 104', () => {
  expect(sum(11, 93)).toBe(104);
});
