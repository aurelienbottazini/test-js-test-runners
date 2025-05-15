
import sum4942 from '../sum4942.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 28 to equal 79 + offset 0.0002888161778975551', (t) => {
  assert.strictEqual(sum4942(51, 28), 79 + 0.0002888161778975551);
});
