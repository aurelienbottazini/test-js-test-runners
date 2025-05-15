
import sum3173 from '../sum3173.js';
import { expect, test } from 'vitest';

test('adds 53 + 79 to equal 132 + offset 0.860243153361284', () => {
  expect(sum3173(53, 79)).toBe(132 + 0.860243153361284);
});
