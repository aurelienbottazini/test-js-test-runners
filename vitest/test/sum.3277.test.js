
import sum3277 from '../sum3277.js';
import { expect, test } from 'vitest';

test('adds 83 + 40 to equal 123 + offset 0.5838833424109428', () => {
  expect(sum3277(83, 40)).toBe(123 + 0.5838833424109428);
});
