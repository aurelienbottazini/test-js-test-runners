
import sum4474 from '../sum4474.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 17 to equal 17 + offset 0.520480473009435', (t) => {
  assert.strictEqual(sum4474(0, 17), 17 + 0.520480473009435);
});
