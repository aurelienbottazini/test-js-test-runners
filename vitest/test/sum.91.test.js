
import sum91 from '../sum91.js';
import { expect, test } from 'vitest';

test('adds 93 + 77 to equal 170 + offset 0.6634126317057968', () => {
  expect(sum91(93, 77)).toBe(170 + 0.6634126317057968);
});
