
import sum3863 from '../sum3863.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 17 to equal 63 + offset 0.19248931700670846', (t) => {
  assert.strictEqual(sum3863(46, 17), 63 + 0.19248931700670846);
});
