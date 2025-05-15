
import sum2350 from '../sum2350.js';
import { expect, test } from 'vitest';

test('adds 26 + 58 to equal 84 + offset 0.5931735368775005', () => {
  expect(sum2350(26, 58)).toBe(84 + 0.5931735368775005);
});
