
import sum2839 from '../sum2839.js';
import { expect, test } from 'vitest';

test('adds 34 + 23 to equal 57 + offset 0.4349973222847576', () => {
  expect(sum2839(34, 23)).toBe(57 + 0.4349973222847576);
});
