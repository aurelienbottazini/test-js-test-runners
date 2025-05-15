
import sum385 from '../sum385.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 3 to equal 65 + offset 0.027974441700606367', (t) => {
  assert.strictEqual(sum385(62, 3), 65 + 0.027974441700606367);
});
