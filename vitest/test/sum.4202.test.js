
import sum4202 from '../sum4202.js';
import { expect, test } from 'vitest';

test('adds 3 + 46 to equal 49 + offset 0.9420483779788549', () => {
  expect(sum4202(3, 46)).toBe(49 + 0.9420483779788549);
});
