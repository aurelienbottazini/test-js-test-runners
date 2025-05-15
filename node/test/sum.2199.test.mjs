
import sum2199 from '../sum2199.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 73 to equal 119 + offset 0.3682178992215771', (t) => {
  assert.strictEqual(sum2199(46, 73), 119 + 0.3682178992215771);
});
