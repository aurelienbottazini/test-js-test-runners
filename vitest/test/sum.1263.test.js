
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 81 to equal 145', () => {
  expect(sum(64, 81)).toBe(145);
});
