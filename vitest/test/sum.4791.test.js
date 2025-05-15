
import sum4791 from '../sum4791.js';
import { expect, test } from 'vitest';

test('adds 0 + 93 to equal 93 + offset 0.05974339013615115', () => {
  expect(sum4791(0, 93)).toBe(93 + 0.05974339013615115);
});
