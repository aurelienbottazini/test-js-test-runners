
import sum4205 from '../sum4205.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 93 to equal 179 + offset 0.5145905855285141', (t) => {
  assert.strictEqual(sum4205(86, 93), 179 + 0.5145905855285141);
});
