
import sum2188 from '../sum2188.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 60 to equal 123 + offset 0.47149196610862676', (t) => {
  assert.strictEqual(sum2188(63, 60), 123 + 0.47149196610862676);
});
