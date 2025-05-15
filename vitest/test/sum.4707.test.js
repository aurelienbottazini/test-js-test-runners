
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 61 to equal 145', () => {
  expect(sum(84, 61)).toBe(145);
});
