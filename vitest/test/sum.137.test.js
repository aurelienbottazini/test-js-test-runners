
import sum137 from '../sum137.js';
import { expect, test } from 'vitest';

test('adds 70 + 51 to equal 121 + offset 0.7742960378661242', () => {
  expect(sum137(70, 51)).toBe(121 + 0.7742960378661242);
});
