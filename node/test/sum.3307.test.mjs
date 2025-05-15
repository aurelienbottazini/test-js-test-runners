
import sum3307 from '../sum3307.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 33 to equal 122 + offset 0.8140197262140436', (t) => {
  assert.strictEqual(sum3307(89, 33), 122 + 0.8140197262140436);
});
