
import sum1202 from '../sum1202.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 88 to equal 100 + offset 0.6040990766572281', (t) => {
  assert.strictEqual(sum1202(12, 88), 100 + 0.6040990766572281);
});
