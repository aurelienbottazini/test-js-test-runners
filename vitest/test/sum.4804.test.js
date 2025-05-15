
import sum4804 from '../sum4804.js';
import { expect, test } from 'vitest';

test('adds 95 + 46 to equal 141 + offset 0.5322080904421648', () => {
  expect(sum4804(95, 46)).toBe(141 + 0.5322080904421648);
});
