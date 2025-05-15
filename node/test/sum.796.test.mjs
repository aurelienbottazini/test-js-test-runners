
import sum796 from '../sum796.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 70 to equal 156 + offset 0.5623377423631984', (t) => {
  assert.strictEqual(sum796(86, 70), 156 + 0.5623377423631984);
});
