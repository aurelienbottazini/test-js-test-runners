
import sum824 from '../sum824.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 39 to equal 126 + offset 0.6089420465146365', (t) => {
  assert.strictEqual(sum824(87, 39), 126 + 0.6089420465146365);
});
