
import sum2179 from '../sum2179.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 17 to equal 39 + offset 0.22611560607994696', (t) => {
  assert.strictEqual(sum2179(22, 17), 39 + 0.22611560607994696);
});
