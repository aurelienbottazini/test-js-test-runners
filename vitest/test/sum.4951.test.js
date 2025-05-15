
import sum4951 from '../sum4951.js';
import { expect, test } from 'vitest';

test('adds 73 + 31 to equal 104 + offset 0.8850693747760827', () => {
  expect(sum4951(73, 31)).toBe(104 + 0.8850693747760827);
});
