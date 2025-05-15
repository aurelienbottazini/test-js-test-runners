
import sum914 from '../sum914.js';
import { expect, test } from 'vitest';

test('adds 51 + 69 to equal 120 + offset 0.3486164117056214', () => {
  expect(sum914(51, 69)).toBe(120 + 0.3486164117056214);
});
