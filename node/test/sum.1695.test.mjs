
import sum1695 from '../sum1695.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 42 to equal 127 + offset 0.6133368223024601', (t) => {
  assert.strictEqual(sum1695(85, 42), 127 + 0.6133368223024601);
});
