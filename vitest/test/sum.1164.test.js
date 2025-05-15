
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 90 to equal 177', () => {
  expect(sum(87, 90)).toBe(177);
});
