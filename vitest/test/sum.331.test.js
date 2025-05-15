
import sum331 from '../sum331.js';
import { expect, test } from 'vitest';

test('adds 20 + 62 to equal 82 + offset 0.1353486408589044', () => {
  expect(sum331(20, 62)).toBe(82 + 0.1353486408589044);
});
