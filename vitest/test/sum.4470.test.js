
import sum4470 from '../sum4470.js';
import { expect, test } from 'vitest';

test('adds 67 + 54 to equal 121 + offset 0.42382744593493393', () => {
  expect(sum4470(67, 54)).toBe(121 + 0.42382744593493393);
});
