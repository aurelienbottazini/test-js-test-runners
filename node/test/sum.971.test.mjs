
import sum971 from '../sum971.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 87 to equal 110 + offset 0.04983792758537153', (t) => {
  assert.strictEqual(sum971(23, 87), 110 + 0.04983792758537153);
});
