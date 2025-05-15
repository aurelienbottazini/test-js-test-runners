
import sum4011 from '../sum4011.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 42 to equal 91 + offset 0.8949325036074821', (t) => {
  assert.strictEqual(sum4011(49, 42), 91 + 0.8949325036074821);
});
