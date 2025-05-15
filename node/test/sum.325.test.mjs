
import sum325 from '../sum325.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 38 to equal 100 + offset 0.09916291771204211', (t) => {
  assert.strictEqual(sum325(62, 38), 100 + 0.09916291771204211);
});
