
import sum127 from '../sum127.js';
import { expect, test } from 'vitest';

test('adds 30 + 10 to equal 40 + offset 0.8853703393440491', () => {
  expect(sum127(30, 10)).toBe(40 + 0.8853703393440491);
});
