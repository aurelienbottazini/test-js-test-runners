
import sum2117 from '../sum2117.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 96 to equal 165 + offset 0.32190400800991936', (t) => {
  assert.strictEqual(sum2117(69, 96), 165 + 0.32190400800991936);
});
