
import sum960 from '../sum960.js';
import { expect, test } from 'vitest';

test('adds 41 + 65 to equal 106 + offset 0.5262927134422534', () => {
  expect(sum960(41, 65)).toBe(106 + 0.5262927134422534);
});
