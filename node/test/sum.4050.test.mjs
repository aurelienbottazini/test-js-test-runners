
import sum4050 from '../sum4050.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 26 to equal 70 + offset 0.6615043417112313', (t) => {
  assert.strictEqual(sum4050(44, 26), 70 + 0.6615043417112313);
});
