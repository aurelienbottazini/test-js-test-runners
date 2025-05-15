
import sum817 from '../sum817.js';
import { expect, test } from 'vitest';

test('adds 69 + 11 to equal 80 + offset 0.4259266564393739', () => {
  expect(sum817(69, 11)).toBe(80 + 0.4259266564393739);
});
