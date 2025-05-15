
import sum458 from '../sum458.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 11 to equal 34 + offset 0.9155992033351089', (t) => {
  assert.strictEqual(sum458(23, 11), 34 + 0.9155992033351089);
});
