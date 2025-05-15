
import sum535 from '../sum535.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 25 to equal 93 + offset 0.9435012487535323', (t) => {
  assert.strictEqual(sum535(68, 25), 93 + 0.9435012487535323);
});
