
import sum1728 from '../sum1728.js';
import { expect, test } from 'vitest';

test('adds 50 + 23 to equal 73 + offset 0.7637117502956866', () => {
  expect(sum1728(50, 23)).toBe(73 + 0.7637117502956866);
});
