
import sum4640 from '../sum4640.js';
import { expect, test } from 'vitest';

test('adds 62 + 15 to equal 77 + offset 0.06827243063883037', () => {
  expect(sum4640(62, 15)).toBe(77 + 0.06827243063883037);
});
