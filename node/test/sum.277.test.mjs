
import sum277 from '../sum277.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 44 to equal 112 + offset 0.709877063288077', (t) => {
  assert.strictEqual(sum277(68, 44), 112 + 0.709877063288077);
});
