
import sum3737 from '../sum3737.js';
import { expect, test } from 'vitest';

test('adds 23 + 86 to equal 109 + offset 0.3243494865431392', () => {
  expect(sum3737(23, 86)).toBe(109 + 0.3243494865431392);
});
