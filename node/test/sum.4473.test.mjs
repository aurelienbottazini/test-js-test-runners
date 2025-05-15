
import sum4473 from '../sum4473.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 54 to equal 146 + offset 0.001520681322697559', (t) => {
  assert.strictEqual(sum4473(92, 54), 146 + 0.001520681322697559);
});
