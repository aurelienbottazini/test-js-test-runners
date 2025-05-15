
import sum4905 from '../sum4905.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 42 to equal 50 + offset 0.295297764604734', (t) => {
  assert.strictEqual(sum4905(8, 42), 50 + 0.295297764604734);
});
