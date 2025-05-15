
import sum2507 from '../sum2507.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 0 to equal 2 + offset 0.7201875140077139', (t) => {
  assert.strictEqual(sum2507(2, 0), 2 + 0.7201875140077139);
});
