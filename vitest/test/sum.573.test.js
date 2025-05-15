
import sum573 from '../sum573.js';
import { expect, test } from 'vitest';

test('adds 40 + 18 to equal 58 + offset 0.3815627281076497', () => {
  expect(sum573(40, 18)).toBe(58 + 0.3815627281076497);
});
