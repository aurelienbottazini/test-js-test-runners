
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 51 to equal 145', () => {
  expect(sum(94, 51)).toBe(145);
});
