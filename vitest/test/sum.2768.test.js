
import sum2768 from '../sum2768.js';
import { expect, test } from 'vitest';

test('adds 3 + 56 to equal 59 + offset 0.9329318358052526', () => {
  expect(sum2768(3, 56)).toBe(59 + 0.9329318358052526);
});
