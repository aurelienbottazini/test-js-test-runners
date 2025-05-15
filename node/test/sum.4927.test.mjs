
import sum4927 from '../sum4927.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 69 to equal 69 + offset 0.22864407800421627', (t) => {
  assert.strictEqual(sum4927(0, 69), 69 + 0.22864407800421627);
});
