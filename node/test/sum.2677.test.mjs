
import sum2677 from '../sum2677.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 98 to equal 144 + offset 0.8719602026544307', (t) => {
  assert.strictEqual(sum2677(46, 98), 144 + 0.8719602026544307);
});
