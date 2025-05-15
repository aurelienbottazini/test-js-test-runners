
import sum4835 from '../sum4835.js';
import { expect, test } from 'vitest';

test('adds 4 + 14 to equal 18 + offset 0.46668843861582454', () => {
  expect(sum4835(4, 14)).toBe(18 + 0.46668843861582454);
});
