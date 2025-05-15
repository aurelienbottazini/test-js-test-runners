
import sum4756 from '../sum4756.js';
import { expect, test } from 'vitest';

test('adds 40 + 89 to equal 129 + offset 0.5234724310342034', () => {
  expect(sum4756(40, 89)).toBe(129 + 0.5234724310342034);
});
