
import sum4514 from '../sum4514.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 27 to equal 58 + offset 0.7671812559892821', (t) => {
  assert.strictEqual(sum4514(31, 27), 58 + 0.7671812559892821);
});
