
import sum4467 from '../sum4467.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 30 to equal 125 + offset 0.8473173840881224', (t) => {
  assert.strictEqual(sum4467(95, 30), 125 + 0.8473173840881224);
});
