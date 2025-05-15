
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 59 to equal 145', () => {
  expect(sum(86, 59)).toBe(145);
});
