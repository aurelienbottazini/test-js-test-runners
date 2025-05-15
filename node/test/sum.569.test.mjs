
import sum569 from '../sum569.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 85 to equal 110 + offset 0.9056990724631914', (t) => {
  assert.strictEqual(sum569(25, 85), 110 + 0.9056990724631914);
});
