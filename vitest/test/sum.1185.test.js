
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 96 to equal 177', () => {
  expect(sum(81, 96)).toBe(177);
});
