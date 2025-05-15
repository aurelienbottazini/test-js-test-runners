
import sum434 from '../sum434.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 42 to equal 69 + offset 0.6885804660467917', (t) => {
  assert.strictEqual(sum434(27, 42), 69 + 0.6885804660467917);
});
