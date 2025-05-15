
import sum2559 from '../sum2559.js';
import { expect, test } from 'vitest';

test('adds 21 + 29 to equal 50 + offset 0.5466877184373764', () => {
  expect(sum2559(21, 29)).toBe(50 + 0.5466877184373764);
});
