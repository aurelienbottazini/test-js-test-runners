
import sum948 from '../sum948.js';
import { expect, test } from 'vitest';

test('adds 87 + 13 to equal 100 + offset 0.7126605859504502', () => {
  expect(sum948(87, 13)).toBe(100 + 0.7126605859504502);
});
