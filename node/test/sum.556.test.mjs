
import sum556 from '../sum556.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 2 to equal 24 + offset 0.2965272019472227', (t) => {
  assert.strictEqual(sum556(22, 2), 24 + 0.2965272019472227);
});
