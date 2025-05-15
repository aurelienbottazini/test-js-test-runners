
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 70 to equal 132', () => {
  expect(sum(62, 70)).toBe(132);
});
