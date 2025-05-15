
import sum161 from '../sum161.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 0 to equal 95 + offset 0.4986593177294122', (t) => {
  assert.strictEqual(sum161(95, 0), 95 + 0.4986593177294122);
});
