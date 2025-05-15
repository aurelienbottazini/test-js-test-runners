
import sum3839 from '../sum3839.js';
import { expect, test } from 'vitest';

test('adds 29 + 7 to equal 36 + offset 0.41266610517250346', () => {
  expect(sum3839(29, 7)).toBe(36 + 0.41266610517250346);
});
