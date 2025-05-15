
import sum4617 from '../sum4617.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 42 to equal 97 + offset 0.9099254656149433', (t) => {
  assert.strictEqual(sum4617(55, 42), 97 + 0.9099254656149433);
});
