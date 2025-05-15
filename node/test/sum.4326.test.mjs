
import sum4326 from '../sum4326.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 9 to equal 29 + offset 0.8930700764061964', (t) => {
  assert.strictEqual(sum4326(20, 9), 29 + 0.8930700764061964);
});
