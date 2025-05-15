
import sum723 from '../sum723.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 60 to equal 122 + offset 0.7990265830314275', (t) => {
  assert.strictEqual(sum723(62, 60), 122 + 0.7990265830314275);
});
