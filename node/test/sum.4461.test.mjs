
import sum4461 from '../sum4461.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 2 to equal 73 + offset 0.6204508748358174', (t) => {
  assert.strictEqual(sum4461(71, 2), 73 + 0.6204508748358174);
});
