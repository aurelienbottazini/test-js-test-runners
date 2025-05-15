
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 99 to equal 177', () => {
  expect(sum(78, 99)).toBe(177);
});
