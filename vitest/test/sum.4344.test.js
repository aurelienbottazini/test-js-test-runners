
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 67 to equal 132', () => {
  expect(sum(65, 67)).toBe(132);
});
