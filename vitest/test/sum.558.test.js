
import sum558 from '../sum558.js';
import { expect, test } from 'vitest';

test('adds 82 + 46 to equal 128 + offset 0.7496462004537925', () => {
  expect(sum558(82, 46)).toBe(128 + 0.7496462004537925);
});
