
import sum4177 from '../sum4177.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 64 to equal 155 + offset 0.7334171482476443', (t) => {
  assert.strictEqual(sum4177(91, 64), 155 + 0.7334171482476443);
});
