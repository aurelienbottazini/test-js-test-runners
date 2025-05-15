
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 73 to equal 145', () => {
  expect(sum(72, 73)).toBe(145);
});
