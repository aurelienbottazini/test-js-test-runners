
import sum4671 from '../sum4671.js';
import { expect, test } from 'vitest';

test('adds 73 + 31 to equal 104 + offset 0.8235202126606533', () => {
  expect(sum4671(73, 31)).toBe(104 + 0.8235202126606533);
});
