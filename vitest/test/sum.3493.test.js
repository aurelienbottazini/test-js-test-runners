
import sum3493 from '../sum3493.js';
import { expect, test } from 'vitest';

test('adds 18 + 29 to equal 47 + offset 0.8993143578798262', () => {
  expect(sum3493(18, 29)).toBe(47 + 0.8993143578798262);
});
