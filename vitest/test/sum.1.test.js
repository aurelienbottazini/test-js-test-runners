
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 64 to equal 145', () => {
  expect(sum(81, 64)).toBe(145);
});
