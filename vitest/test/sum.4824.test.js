
import sum4824 from '../sum4824.js';
import { expect, test } from 'vitest';

test('adds 68 + 28 to equal 96 + offset 0.5623425737360251', () => {
  expect(sum4824(68, 28)).toBe(96 + 0.5623425737360251);
});
