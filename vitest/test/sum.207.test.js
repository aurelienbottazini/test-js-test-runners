
import sum207 from '../sum207.js';
import { expect, test } from 'vitest';

test('adds 26 + 94 to equal 120 + offset 0.7891215647080808', () => {
  expect(sum207(26, 94)).toBe(120 + 0.7891215647080808);
});
