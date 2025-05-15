
import sum880 from '../sum880.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 60 to equal 130 + offset 0.18035113859902863', (t) => {
  assert.strictEqual(sum880(70, 60), 130 + 0.18035113859902863);
});
