
import sum29 from '../sum29.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 28 to equal 67 + offset 0.6016910932811759', (t) => {
  assert.strictEqual(sum29(39, 28), 67 + 0.6016910932811759);
});
