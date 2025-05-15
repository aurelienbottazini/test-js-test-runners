
import sum4142 from '../sum4142.js';
import { expect, test } from 'vitest';

test('adds 51 + 19 to equal 70 + offset 0.09240003132229457', () => {
  expect(sum4142(51, 19)).toBe(70 + 0.09240003132229457);
});
