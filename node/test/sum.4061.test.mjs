
import sum4061 from '../sum4061.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 47 to equal 83 + offset 0.0795574428401219', (t) => {
  assert.strictEqual(sum4061(36, 47), 83 + 0.0795574428401219);
});
