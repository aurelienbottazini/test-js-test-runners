
import sum4421 from '../sum4421.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 4 to equal 83 + offset 0.798334993326487', (t) => {
  assert.strictEqual(sum4421(79, 4), 83 + 0.798334993326487);
});
