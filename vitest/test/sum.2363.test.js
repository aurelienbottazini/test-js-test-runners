
import sum2363 from '../sum2363.js';
import { expect, test } from 'vitest';

test('adds 67 + 17 to equal 84 + offset 0.23626097924658973', () => {
  expect(sum2363(67, 17)).toBe(84 + 0.23626097924658973);
});
