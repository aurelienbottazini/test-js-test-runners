
import sum4600 from '../sum4600.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 18 to equal 114 + offset 0.8798129823325744', (t) => {
  assert.strictEqual(sum4600(96, 18), 114 + 0.8798129823325744);
});
