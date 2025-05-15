
import sum4839 from '../sum4839.js';
import { expect, test } from 'vitest';

test('adds 41 + 95 to equal 136 + offset 0.8293050878895992', () => {
  expect(sum4839(41, 95)).toBe(136 + 0.8293050878895992);
});
