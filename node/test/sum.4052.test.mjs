
import sum4052 from '../sum4052.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 81 to equal 174 + offset 0.8481672884482223', (t) => {
  assert.strictEqual(sum4052(93, 81), 174 + 0.8481672884482223);
});
