
import sum3356 from '../sum3356.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 5 to equal 16 + offset 0.30684809211356756', (t) => {
  assert.strictEqual(sum3356(11, 5), 16 + 0.30684809211356756);
});
