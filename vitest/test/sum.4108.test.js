
import sum4108 from '../sum4108.js';
import { expect, test } from 'vitest';

test('adds 40 + 13 to equal 53 + offset 0.09941486919034004', () => {
  expect(sum4108(40, 13)).toBe(53 + 0.09941486919034004);
});
