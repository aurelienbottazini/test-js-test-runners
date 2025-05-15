
import sum3725 from '../sum3725.js';
import { expect, test } from 'vitest';

test('adds 91 + 93 to equal 184 + offset 0.12750098250998698', () => {
  expect(sum3725(91, 93)).toBe(184 + 0.12750098250998698);
});
