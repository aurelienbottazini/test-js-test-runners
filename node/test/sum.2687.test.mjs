
import sum2687 from '../sum2687.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 96 to equal 151 + offset 0.8920388956683587', (t) => {
  assert.strictEqual(sum2687(55, 96), 151 + 0.8920388956683587);
});
