
import sum1154 from '../sum1154.js';
import { expect, test } from 'vitest';

test('adds 78 + 95 to equal 173 + offset 0.9997713294042593', () => {
  expect(sum1154(78, 95)).toBe(173 + 0.9997713294042593);
});
