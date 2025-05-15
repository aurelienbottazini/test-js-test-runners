
import sum2608 from '../sum2608.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 20 to equal 95 + offset 0.5732870578817223', (t) => {
  assert.strictEqual(sum2608(75, 20), 95 + 0.5732870578817223);
});
