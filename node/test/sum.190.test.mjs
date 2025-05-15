
import sum190 from '../sum190.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 19 to equal 69 + offset 0.1187207311694678', (t) => {
  assert.strictEqual(sum190(50, 19), 69 + 0.1187207311694678);
});
