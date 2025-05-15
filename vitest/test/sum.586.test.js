
import sum586 from '../sum586.js';
import { expect, test } from 'vitest';

test('adds 15 + 71 to equal 86 + offset 0.3555208201354787', () => {
  expect(sum586(15, 71)).toBe(86 + 0.3555208201354787);
});
