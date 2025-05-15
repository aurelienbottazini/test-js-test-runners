
import sum2732 from '../sum2732.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 93 to equal 166 + offset 0.26894104855993994', (t) => {
  assert.strictEqual(sum2732(73, 93), 166 + 0.26894104855993994);
});
