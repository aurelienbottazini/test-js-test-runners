
import sum3161 from '../sum3161.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 98 to equal 194 + offset 0.7282931464207356', (t) => {
  assert.strictEqual(sum3161(96, 98), 194 + 0.7282931464207356);
});
