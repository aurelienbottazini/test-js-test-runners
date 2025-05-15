
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 52 to equal 132', () => {
  expect(sum(80, 52)).toBe(132);
});
