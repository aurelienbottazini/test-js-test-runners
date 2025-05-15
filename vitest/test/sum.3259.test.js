
import sum3259 from '../sum3259.js';
import { expect, test } from 'vitest';

test('adds 50 + 23 to equal 73 + offset 0.959821023039828', () => {
  expect(sum3259(50, 23)).toBe(73 + 0.959821023039828);
});
