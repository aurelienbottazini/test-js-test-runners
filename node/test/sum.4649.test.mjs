
import sum4649 from '../sum4649.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 76 to equal 121 + offset 0.44921836483197386', (t) => {
  assert.strictEqual(sum4649(45, 76), 121 + 0.44921836483197386);
});
