
import sum724 from '../sum724.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 1 to equal 30 + offset 0.3897897212864816', (t) => {
  assert.strictEqual(sum724(29, 1), 30 + 0.3897897212864816);
});
