
import sum173 from '../sum173.js';
import { expect, test } from 'vitest';

test('adds 25 + 44 to equal 69 + offset 0.18060399466935784', () => {
  expect(sum173(25, 44)).toBe(69 + 0.18060399466935784);
});
