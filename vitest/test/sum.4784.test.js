
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 85 to equal 177', () => {
  expect(sum(92, 85)).toBe(177);
});
