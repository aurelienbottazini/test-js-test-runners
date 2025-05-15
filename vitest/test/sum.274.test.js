
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 93 to equal 145', () => {
  expect(sum(52, 93)).toBe(145);
});
