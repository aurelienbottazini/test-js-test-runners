
import sum1014 from '../sum1014.js';
import { expect, test } from 'vitest';

test('adds 90 + 84 to equal 174 + offset 0.22809660660389763', () => {
  expect(sum1014(90, 84)).toBe(174 + 0.22809660660389763);
});
