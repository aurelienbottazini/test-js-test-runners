
import sum4405 from '../sum4405.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 30 to equal 38 + offset 0.47925354707256085', (t) => {
  assert.strictEqual(sum4405(8, 30), 38 + 0.47925354707256085);
});
