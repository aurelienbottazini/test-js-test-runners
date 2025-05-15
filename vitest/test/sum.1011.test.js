
import sum1011 from '../sum1011.js';
import { expect, test } from 'vitest';

test('adds 54 + 39 to equal 93 + offset 0.5945393398092363', () => {
  expect(sum1011(54, 39)).toBe(93 + 0.5945393398092363);
});
