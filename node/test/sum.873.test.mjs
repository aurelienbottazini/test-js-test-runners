
import sum873 from '../sum873.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 66 to equal 143 + offset 0.5430238126252493', (t) => {
  assert.strictEqual(sum873(77, 66), 143 + 0.5430238126252493);
});
