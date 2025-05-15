
import sum2380 from '../sum2380.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 25 to equal 34 + offset 0.7717761473044277', (t) => {
  assert.strictEqual(sum2380(9, 25), 34 + 0.7717761473044277);
});
