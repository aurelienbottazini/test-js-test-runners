
import sum4511 from '../sum4511.js';
import { expect, test } from 'vitest';

test('adds 19 + 58 to equal 77 + offset 0.8061196103690952', () => {
  expect(sum4511(19, 58)).toBe(77 + 0.8061196103690952);
});
