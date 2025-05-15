
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 62 to equal 148', () => {
  expect(sum(86, 62)).toBe(148);
});
