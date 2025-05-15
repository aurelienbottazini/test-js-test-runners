
import sum4325 from '../sum4325.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 89 to equal 186 + offset 0.64520451177084', (t) => {
  assert.strictEqual(sum4325(97, 89), 186 + 0.64520451177084);
});
