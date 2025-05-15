
import sum4009 from '../sum4009.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 59 to equal 72 + offset 0.2569215270272911', (t) => {
  assert.strictEqual(sum4009(13, 59), 72 + 0.2569215270272911);
});
