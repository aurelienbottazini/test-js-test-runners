
import sum332 from '../sum332.js';
import { expect, test } from 'vitest';

test('adds 66 + 50 to equal 116 + offset 0.6327642840533445', () => {
  expect(sum332(66, 50)).toBe(116 + 0.6327642840533445);
});
