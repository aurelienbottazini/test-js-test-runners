
import sum202 from '../sum202.js';
import { expect, test } from 'vitest';

test('adds 93 + 57 to equal 150 + offset 0.24273517889584706', () => {
  expect(sum202(93, 57)).toBe(150 + 0.24273517889584706);
});
