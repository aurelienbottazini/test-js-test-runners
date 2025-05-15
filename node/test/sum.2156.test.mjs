
import sum2156 from '../sum2156.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 48 to equal 104 + offset 0.8524159448492924', (t) => {
  assert.strictEqual(sum2156(56, 48), 104 + 0.8524159448492924);
});
