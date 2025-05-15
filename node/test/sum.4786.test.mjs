
import sum4786 from '../sum4786.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 17 to equal 90 + offset 0.6027098958298992', (t) => {
  assert.strictEqual(sum4786(73, 17), 90 + 0.6027098958298992);
});
