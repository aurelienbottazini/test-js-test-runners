
import sum4739 from '../sum4739.js';
import { expect, test } from 'vitest';

test('adds 33 + 20 to equal 53 + offset 0.5755937054246284', () => {
  expect(sum4739(33, 20)).toBe(53 + 0.5755937054246284);
});
