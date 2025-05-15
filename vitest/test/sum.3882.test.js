
import sum3882 from '../sum3882.js';
import { expect, test } from 'vitest';

test('adds 62 + 16 to equal 78 + offset 0.5296658335866569', () => {
  expect(sum3882(62, 16)).toBe(78 + 0.5296658335866569);
});
