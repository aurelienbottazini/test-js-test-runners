
import sum3579 from '../sum3579.js';
import { expect, test } from 'vitest';

test('adds 23 + 96 to equal 119 + offset 0.3821705188254597', () => {
  expect(sum3579(23, 96)).toBe(119 + 0.3821705188254597);
});
