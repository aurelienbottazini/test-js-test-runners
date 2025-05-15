
import sum2296 from '../sum2296.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 86 to equal 138 + offset 0.9198349357015506', (t) => {
  assert.strictEqual(sum2296(52, 86), 138 + 0.9198349357015506);
});
