
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 83 + 94 to equal 177', () => {
  expect(sum(83, 94)).toBe(177);
});
