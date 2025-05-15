
import sum4275 from '../sum4275.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 45 to equal 144 + offset 0.7370612878708559', (t) => {
  assert.strictEqual(sum4275(99, 45), 144 + 0.7370612878708559);
});
