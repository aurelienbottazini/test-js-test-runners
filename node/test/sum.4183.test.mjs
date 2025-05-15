
import sum4183 from '../sum4183.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 22 to equal 103 + offset 0.1449849375853024', (t) => {
  assert.strictEqual(sum4183(81, 22), 103 + 0.1449849375853024);
});
