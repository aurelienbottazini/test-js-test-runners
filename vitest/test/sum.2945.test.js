
import sum2945 from '../sum2945.js';
import { expect, test } from 'vitest';

test('adds 29 + 82 to equal 111 + offset 0.2958605090418148', () => {
  expect(sum2945(29, 82)).toBe(111 + 0.2958605090418148);
});
