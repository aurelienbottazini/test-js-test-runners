
import sum4316 from '../sum4316.js';
import { expect, test } from 'vitest';

test('adds 85 + 95 to equal 180 + offset 0.9711839953935656', () => {
  expect(sum4316(85, 95)).toBe(180 + 0.9711839953935656);
});
