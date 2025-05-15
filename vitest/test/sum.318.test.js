
import sum318 from '../sum318.js';
import { expect, test } from 'vitest';

test('adds 52 + 19 to equal 71 + offset 0.299547311272255', () => {
  expect(sum318(52, 19)).toBe(71 + 0.299547311272255);
});
