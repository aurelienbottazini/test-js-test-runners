
import sum3968 from '../sum3968.js';
import { expect, test } from 'vitest';

test('adds 19 + 96 to equal 115 + offset 0.507424744110331', () => {
  expect(sum3968(19, 96)).toBe(115 + 0.507424744110331);
});
