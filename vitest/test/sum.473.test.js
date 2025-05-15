
import sum473 from '../sum473.js';
import { expect, test } from 'vitest';

test('adds 60 + 25 to equal 85 + offset 0.3891479634653894', () => {
  expect(sum473(60, 25)).toBe(85 + 0.3891479634653894);
});
