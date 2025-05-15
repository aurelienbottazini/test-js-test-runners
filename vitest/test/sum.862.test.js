
import sum862 from '../sum862.js';
import { expect, test } from 'vitest';

test('adds 84 + 93 to equal 177 + offset 0.760549063463858', () => {
  expect(sum862(84, 93)).toBe(177 + 0.760549063463858);
});
