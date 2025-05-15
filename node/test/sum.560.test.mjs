
import sum560 from '../sum560.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 48 to equal 123 + offset 0.9858908978057637', (t) => {
  assert.strictEqual(sum560(75, 48), 123 + 0.9858908978057637);
});
