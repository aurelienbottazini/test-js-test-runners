
import sum796 from '../sum796.js';
import { expect, test } from 'vitest';

test('adds 34 + 39 to equal 73 + offset 0.6265221322477104', () => {
  expect(sum796(34, 39)).toBe(73 + 0.6265221322477104);
});
