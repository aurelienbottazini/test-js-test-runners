
import sum280 from '../sum280.js';
import { expect, test } from 'vitest';

test('adds 3 + 69 to equal 72 + offset 0.8778006256729064', () => {
  expect(sum280(3, 69)).toBe(72 + 0.8778006256729064);
});
