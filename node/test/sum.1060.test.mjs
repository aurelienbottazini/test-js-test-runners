
import sum1060 from '../sum1060.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 83 to equal 165 + offset 0.895097361760374', (t) => {
  assert.strictEqual(sum1060(82, 83), 165 + 0.895097361760374);
});
