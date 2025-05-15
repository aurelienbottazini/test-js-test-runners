
import sum405 from '../sum405.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 78 to equal 84 + offset 0.7329558590902983', (t) => {
  assert.strictEqual(sum405(6, 78), 84 + 0.7329558590902983);
});
