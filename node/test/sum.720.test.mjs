
import sum720 from '../sum720.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 2 to equal 5 + offset 0.3571434415833171', (t) => {
  assert.strictEqual(sum720(3, 2), 5 + 0.3571434415833171);
});
