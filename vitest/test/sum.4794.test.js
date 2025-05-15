
import sum4794 from '../sum4794.js';
import { expect, test } from 'vitest';

test('adds 62 + 54 to equal 116 + offset 0.9182116688740347', () => {
  expect(sum4794(62, 54)).toBe(116 + 0.9182116688740347);
});
