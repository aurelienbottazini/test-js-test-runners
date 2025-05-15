
import sum4287 from '../sum4287.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 61 to equal 102 + offset 0.14462278181943222', (t) => {
  assert.strictEqual(sum4287(41, 61), 102 + 0.14462278181943222);
});
