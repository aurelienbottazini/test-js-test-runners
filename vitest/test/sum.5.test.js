
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 83 to equal 177', () => {
  expect(sum(94, 83)).toBe(177);
});
