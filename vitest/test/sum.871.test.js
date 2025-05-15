
import sum871 from '../sum871.js';
import { expect, test } from 'vitest';

test('adds 52 + 77 to equal 129 + offset 0.056243337264836546', () => {
  expect(sum871(52, 77)).toBe(129 + 0.056243337264836546);
});
