
import sum2171 from '../sum2171.js';
import { expect, test } from 'vitest';

test('adds 66 + 36 to equal 102 + offset 0.6857479037191954', () => {
  expect(sum2171(66, 36)).toBe(102 + 0.6857479037191954);
});
